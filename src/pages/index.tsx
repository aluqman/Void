import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let stars = [];
  for (let i = 0; i < 75; i++) {
    const item = <div className="star" key={i}/>
    stars.push(item)
  }

  return (
    <>
      <Head>
        <title>The Thinking Place</title>
      </Head>
      <div className="stars">
        {stars}
      </div>
    </>
  )
}
