import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsSorted = () => {
    const filenames = fs.readdirSync(postsDirectory);

    const postsData = filenames.map((filename) => {
        const id = filename.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, filename);
        const contents = fs.readFileSync(fullPath, 'utf-8');

        const result = matter(contents);

        return {
            id,
            ...(result.data as { date: string, title: string }),
        };
    });

    return postsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};
