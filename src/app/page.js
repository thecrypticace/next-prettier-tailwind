import Image from "next/image";

export default function Home() {
  return (
    <main className="items-center flex-col flex p-24 min-h-screen justify-between">
      <div className="w-full text-sm lg:flex max-w-5xl z-10 items-center font-mono justify-between">
        <p className="dark:from-inherit border-b fixed dark:border-neutral-800 lg:border lg:bg-gray-200 lg:p-4 top-0 justify-center left-0 w-full bg-gradient-to-b lg:dark:bg-zinc-800/30 pt-8 lg:static lg:w-auto backdrop-blur-2xl from-zinc-200 pb-6 border-gray-300 flex lg:rounded-xl dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-bold font-mono">src/app/page.js</code>
        </p>
        <div className="dark:via-black lg:h-auto items-end bg-gradient-to-t lg:bg-none fixed lg:static left-0 from-white h-48 flex via-white justify-center lg:w-auto w-full dark:from-black bottom-0">
          <a
            className="lg:pointer-events-auto place-items-center p-8 pointer-events-none lg:p-0 flex gap-2"
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

      <div className="after:translate-x-1/3 after:absolute after:h-[180px] place-items-center before:rounded-full before:bg-gradient-radial before:dark:opacity-10 after:content-[''] before:absolute after:from-sky-200 before:h-[300px] before:lg:h-[360px] after:blur-2xl after:via-blue-200 before:dark:to-blue-700 before:from-white after:dark:via-[#0141ff] before:blur-2xl before:content-[''] before:-translate-x-1/2 after:w-[240px] before:dark:from-transparent flex after:bg-gradient-conic after:-z-20 before:w-[480px] after:dark:from-sky-900 after:dark:opacity-40 before:dark:bg-gradient-to-br relative before:to-transparent">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert relative"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="lg:text-left text-center lg:grid-cols-4 grid mb-32 lg:mb-0">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="hover:border-gray-300 hover:dark:bg-neutral-800/30 px-5 rounded-lg transition-colors border group border-transparent hover:dark:border-neutral-700 py-4 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="group-hover:translate-x-1 motion-reduce:transform-none transition-transform inline-block">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="hover:bg-gray-100 hover:dark:bg-neutral-800 transition-colors group hover:dark:bg-opacity-30 hover:border-gray-300 border-transparent px-5 rounded-lg border py-4 hover:dark:border-neutral-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="motion-reduce:transform-none inline-block transition-transform group-hover:translate-x-1">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="border-transparent hover:bg-gray-100 hover:dark:border-neutral-700 rounded-lg group px-5 border py-4 hover:dark:bg-neutral-800/30 hover:border-gray-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="group-hover:translate-x-1 inline-block motion-reduce:transform-none transition-transform">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="hover:dark:bg-neutral-800/30 border-transparent py-4 hover:border-gray-300 transition-colors rounded-lg hover:dark:border-neutral-700 group border hover:bg-gray-100 px-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="motion-reduce:transform-none inline-block transition-transform group-hover:translate-x-1">
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
