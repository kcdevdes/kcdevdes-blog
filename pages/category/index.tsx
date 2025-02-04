import { Post, allPosts } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import PostList from '@/components/PostList';
import { useState } from 'react';
import CategoryList from '@/components/CategoryList';

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts,
    },
  };
};

export default function Category({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [sellect, setSellect] = useState<string>('');

  return (
    <>
      <Head>
        <meta property="og:title" content="kcdevdes.log" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Category" />
        <meta property="og:url" content="https://kcdevdes.com/category" />
        <meta property="og:image" content="https://kcdevdes.com/images/meta-logo.jpeg" />
      </Head>
      <section className="mt-12 mb-8 flex flex-col gap-12">
        <h1 className="font-bold text-2xl sm:text-4xl font-mono">🗂 Category</h1>
        <CategoryList sellect={sellect} setSellect={setSellect} />
      </section>
      {sellect === '' ? (
        <PostList posts={posts} />
      ) : (
        <PostList posts={(posts as Post[]).filter((post) => post.category === sellect)} />
      )}
    </>
  );
}
