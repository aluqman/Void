import Head from "next/head";
import React, { useState } from "react";

export default function Home() {
  return (
    <div className="overflow-hidden touch-none">
      <Head>
        <title>The Thinking Place</title>
        <meta>name="viewport" content="user-scalable=no"</meta>
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
    if (e.key === " " || e.key === "Enter") {
      setText("");
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  }

  return (
    <div className="flex w-screen justify-center">
      <textarea
        onKeyDown={handleSpace}
        onChange={handleChange}
        value={text}
        placeholder="type your thoughts away <3"
        className="textarea textarea-bordered bg-transparent w-3/4 h-fit leading-loose resize-none max-h-screen text-base"
        rows={1}
        autoFocus
      />
    </div>
  );
}
