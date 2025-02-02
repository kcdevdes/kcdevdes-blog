import { Post, allPosts } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import PostList from '@/components/PostList';
import { useState } from 'react';
import TagList from '@/components/TagList';

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  // 모든 태그 수집
  const tags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));

  return {
    props: {
      posts,
      tags,
    },
  };
};

export default function Tags({ posts, tags }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedTag, setSelectedTag] = useState<string>('');

  return (
    <>
      <Head>
        <meta property="og:title" content="kcdevdes.log" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Browse posts by tags" />
        <meta property="og:url" content="https://kcdevdes.com/tags" />
        <meta property="og:image" content="https://kcdevdes.com/images/meta-logo.png" />
      </Head>
      <section className="mt-12 mb-8 flex flex-col gap-12">
        <h1 className="font-bold text-2xl sm:text-4xl font-mono">🏷 Tags</h1>
        <TagList selectedTag={selectedTag} setSelectedTag={setSelectedTag} tags={tags} />
      </section>
      {selectedTag === '' ? (
        <PostList posts={posts} />
      ) : (
        <PostList posts={(posts as Post[]).filter((post) => post.tags?.includes(selectedTag))} />
      )}
    </>
  );
}
