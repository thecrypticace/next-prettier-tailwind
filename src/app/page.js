import Image from "next/image";

export default function Home() {
  return (
    <main className="items-center justify-between flex p-24 flex-col min-h-screen">
      <div className="justify-between lg:flex font-mono text-sm items-center z-10 w-full max-w-5xl">
        <p className="top-0 pt-8 lg:border from-zinc-200 dark:border-neutral-800 border-gray-300 backdrop-blur-2xl lg:static lg:dark:bg-zinc-800/30 bg-gradient-to-b flex lg:rounded-xl fixed dark:bg-zinc-800/30 left-0 justify-center border-b  w-full lg:p-4 lg:w-auto pb-6 lg:bg-gray-200 dark:from-inherit">
          Get started by editing&nbsp;
          <code className="font-bold font-mono">src/app/page.js</code>
        </p>
        <div className="lg:w-auto justify-center dark:via-black items-end lg:h-auto h-48 lg:static via-white w-full fixed bg-gradient-to-t flex dark:from-black lg:bg-none left-0 bottom-0 from-white">
          <a
            className="lg:pointer-events-auto lg:p-0 pointer-events-none place-items-center gap-2 flex p-8"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="after:from-sky-200 before:lg:h-[360px] after:dark:opacity-40 before:content-[''] after:via-blue-200 after:bg-gradient-conic after:-z-20 after:dark:via-[#0141ff] after:h-[180px] before:dark:to-blue-700 before:from-white after:content-[''] before:to-transparent place-items-center before:bg-gradient-radial before:dark:opacity-10 before:absolute after:absolute after:translate-x-1/3 before:blur-2xl before:dark:from-transparent before:h-[300px] before:dark:bg-gradient-to-br before:rounded-full before:-translate-x-1/2 after:dark:from-sky-900 flex relative before:w-[480px] after:blur-2xl after:w-[240px]">
        <Image
          className="dark:invert relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="lg:text-left text-center mb-32 lg:grid-cols-4 grid lg:mb-0">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="border border-transparent hover:dark:bg-neutral-800/30 hover:border-gray-300 group hover:dark:border-neutral-700 hover:bg-gray-100 py-4 rounded-lg px-5 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="group-hover:translate-x-1 inline-block motion-reduce:transform-none transition-transform">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="px-5 hover:dark:bg-neutral-800 hover:bg-gray-100 group hover:dark:border-neutral-700 transition-colors hover:dark:bg-opacity-30 py-4 border-transparent rounded-lg hover:border-gray-300 border"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="group-hover:translate-x-1 motion-reduce:transform-none transition-transform inline-block">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="hover:border-gray-300 hover:dark:bg-neutral-800/30 transition-colors border py-4 group hover:bg-gray-100 border-transparent hover:dark:border-neutral-700 rounded-lg px-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="rounded-lg border hover:bg-gray-100 hover:border-gray-300 py-4 hover:dark:border-neutral-700 group hover:dark:bg-neutral-800/30 border-transparent transition-colors px-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none inline-block">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
