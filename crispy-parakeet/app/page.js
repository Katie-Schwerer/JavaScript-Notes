import Image from "next/image";
import Link from 'next/link';
import Layout from "./navigation";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Welcome to our Homepage!</h1>
      <Link href="/about">Go to About Page</Link>
      <Link href="/posts/1">Go to Post 1</Link>
      <Link href="/posts/2">Go to Post 2</Link>
    </Layout>
  );
}
