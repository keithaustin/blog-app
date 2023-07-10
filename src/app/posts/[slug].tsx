import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { GetStaticProps } from 'next';

const Post = () => {
    return (
        <>
            <Head>
                <title>Post Title</title>
            </Head>
            <Script 
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.log("Facebook SDK loaded properly.")}
            />

            <section>
                <h1>Post Title</h1>
                <hr />
                <p>Post Body</p>
            </section>
        </>
    )
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            
        }
    };
}

export default Post;