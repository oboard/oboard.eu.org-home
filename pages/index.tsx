import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>一块小板子</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Link href="https://blog.oboard.eu.org">
        <button className="btn btn-primary">博客 Blog</button>
        </Link>
      </main>
    </>
  );
}
