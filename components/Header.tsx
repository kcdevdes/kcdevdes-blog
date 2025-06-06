import { useEffect, useRef, useState } from 'react';
import Nav from './Nav';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

type Theme = null | 'dark' | 'light';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const [onToggle, setOnToggle] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(null);

  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current?.classList.add('shadow-[0_5px_7px_0px_#ececec]');
      return;
    }
    headerRef.current?.classList.remove('shadow-[0_5px_7px_0px_#ececec]');
  };

  const handleToggle = () => {
    if (onToggle) toggleRef.current?.classList.add('hidden');
    else toggleRef.current?.classList.remove('hidden');
    setOnToggle((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setTheme(document.body.className as Theme);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>kcdevdes.log</title>

        {/* D2Coding Font */}
        <link
          href="http://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css"
          rel="stylesheet"
          type="text/css"
        />
        <style global jsx>{`
          @font-face {
            font-family: 'D2 coding';
            font-style: normal;
            font-weight: 400;
            src: url('D2Coding.eot');
            src: local('※'), local('D2Coding'),
              url('D2Coding.eot?#iefix') format('embedded-opentype'),
              url('D2Coding.woff2') format('x-woff2'), url('D2Coding.woff') format('woff'),
              url('D2Coding.ttf') format('truetype'), url('D2Coding.svg') format('svg');
          }
          @font-face {
            font-family: 'D2 coding';
            font-style: normal;
            font-weight: 700;
            src: url('D2CodingBold.eot');
            src: local('※'), local('D2Coding Bold'),
              url('D2CodingBold.eot?#iefix') format('embedded-opentype'),
              url('D2CodingBold.woff2') format('x-woff2'), url('D2CodingBold.woff') format('woff'),
              url('D2CodingBold.ttf') format('truetype'), url('D2CodingBold.svg') format('svg');
          }
          @font-face {
            font-family: 'Paperlogy';
            src: url('/font/Paperlogy-4Regular.ttf') format('ttf');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Paperlogy';
            src: url('/font/Paperlogy-1Thin.ttf') format('ttf');
            font-weight: light;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Paperlogy';
            src: url('/font/Paperlogy-7Bold.ttf') format('ttf');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
        `}</style>
      </Head>
      <header
        ref={headerRef}
        className="sticky top-0 left-0 w-full z-10 h-20 font-mono transition duration-500 bg-white dark:bg-[#111111]"
      >
        <div className="text-black max-w-screen-md h-20 flex flex-nowrap items-center justify-between m-auto px-8">
          <Link href="/">
            {theme === 'dark' ? (
              // <Image src="/images/logoDarkMode.png" alt="profile" width={180} height={30} />
              <h1 className="text-blue-300 text-3xl font-light">@kcdevdes</h1>
            ) : (
              // <Image src="/images/logoLightMode.png" alt="profile" width={180} height={30} />
              <h1 className="text-blue-700 text-3xl font-light">@kcdevdes</h1>
            )}
          </Link>
          <div className="flex flex-nowrap gap-8 items-center">
            <button type="button" className="m-0 p-0" onClick={handleTheme}>
              {theme === 'dark' ? (
                <Image src="/images/moon.svg" alt="dark mode" width={30} height={30} />
              ) : (
                <Image src="/images/sun.svg" alt="light mode" width={30} height={30} />
              )}
            </button>
            <button type="button" className="m-0 p-0 sm:hidden" onClick={handleToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 transition duration-500 stroke-black dark:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="flex-nowrap items-center justify-center gap-5 text-center hidden sm:flex">
              <Nav type="normal" />
            </div>
          </div>
        </div>
        <div
          ref={toggleRef}
          className="w-full h-screen absolute top-20 left-0 bg-white flex-col flex-nowrap p-5 flex hidden dark:bg-[#111111]"
        >
          <Nav type="toggle" onClick={handleToggle} />
        </div>
      </header>
    </>
  );
}
