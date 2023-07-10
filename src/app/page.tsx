import Image from 'next/image'
import { GetStaticProps } from 'next';
import { getPostsSorted } from '../../middleware/posts';


export const Home = (
  {
    postsData
  }: {
    postsData: {
      id: string,
      date: string,
      title: string,
    }[]
  }) => {
    console.log(postsData);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="posts">
        <ul>
          {
            postsData.map(({ id, date, title }) => (
              <li key={id}>{title}</li>
            ))
          }
        </ul>

      </section>
    </main>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getPostsSorted();
  return {
    props: {
      postsData,
    }
  }
};

export default Home;