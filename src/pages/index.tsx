import Head from "next/head";
import { Inter } from "next/font/google";
import { fileURLToPath } from "url";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Thinking Place</title>
      </Head>
      <Input />
      <Stars />
    </div>
  );
}

const Stars = () => (
  <div className="stars">
    {Array.from({ length: 75 }, (_, i) => (
      <div className="star" key={i} />
    ))}
  </div>
);

const Input = () => (
  <div className="flex w-screen justify-center">
    <input placeholder="type your thoughts away <3" className="input input-bordered bg-transparent w-1/2"/>
  </div>
)