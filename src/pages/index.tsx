import Head from "next/head";
import React, { useState } from "react";

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

function Input() {
  const [text, setText] = useState("");

  function handleSpace(e: React.KeyboardEvent) {
    if (e.key === " ") {
      setText("");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <div className="flex w-screen justify-center">
      <input
        onKeyDown={handleSpace}
        onChange={handleChange}
        value={text}
        placeholder="type your thoughts away <3"
        className="input input-bordered bg-transparent w-1/2"
      />
    </div>
  );
}
