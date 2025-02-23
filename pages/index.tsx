import { allPosts } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import PostList from '@/components/PostList';
import Image from 'next/image';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts: posts.slice(0, 5),
    },
  };
};

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <meta property="og:title" content="kcdevdes.log" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Gibeom Choi" />
        <meta property="og:url" content="https://kcdevdes.com" />
        <meta property="og:image" content="https://kcdevdes.com/images/meta-logo.jpeg" />
      </Head>
      <section className="my-10">
        <h1 className="font-light text-2xl sm:text-4xl">Gibeom Choi.</h1>
        <sup className="font-normal text-xl">최기범.</sup>
      </section>
      <section className="flex justify-between gap-8 items-center flex-wrap ">
        <Image
          src="/images/profile.png"
          alt="profile"
          width={300}
          height={300}
          className="rounded-[60px] drop-shadow-xl"
        />
        <div className="min-w-[250] max-w-[300px]">
          <h2 className="font-light text-4xl">Annyeong-haseyo</h2>
          <sup className="font-normal text-xl">Hello</sup>
          <br />
          <p>Backend developer, Computer Science, BS, University of Massachusetts - Boston</p>
          <br />
          <p>Graduation Expected on Dec, 2025</p>
          <div className="flex gap-5 items-center mt-4">
            <a
              href="mailto:kcdevdes@gmail.com"
              className="flex gap-2 items-center hover:scale-110 transition-transform duration-500 hover:text-green-500 hover:fill-green-500 dark:fill-white dark:hover:fill-green-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
              </svg>
              <p>Mail</p>
            </a>
            <a
              href="https://github.com/kcdevdes"
              className="flex gap-2 items-center transition-transform duration-500 hover:scale-110 hover:text-green-500 hover:fill-green-500 dark:fill-white dark:hover:fill-green-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <p>GitHub</p>
            </a>
            <a
              href="https://instagram.com/g_choi001"
              className="flex gap-2 items-center transition-transform duration-500 hover:scale-110 hover:text-green-500 hover:fill-green-500 dark:fill-white dark:hover:fill-green-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.75 2h8.5A5.25 5.25 0 0 1 21.5 7.25v8.5A5.25 5.25 0 0 1 16.25 21H7.75A5.25 5.25 0 0 1 2.5 15.75v-8.5A5.25 5.25 0 0 1 7.75 2ZM12 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm5.5-9.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>

              <p>Instagram</p>
            </a>
          </div>
        </div>
      </section>
      <section className="mt-12 mb-10">
        <h1 className="text-2xl sm:text-4xl font-bold">📖 Posts</h1>
      </section>
      <PostList posts={posts} />
    </>
  );
}
