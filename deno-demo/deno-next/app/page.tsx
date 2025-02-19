"use client";
import { useEffect, useState } from "react";

export default function Home(){
  const [message, setMessage] = useState("Loading...");

  useEffect(()=> {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));

  }, []);

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", textAlign: "center" }}>
      <h1 >Welcome to the Next.js with Deno tutorial Vaughan</h1>
      <p>{message}</p>
    </div>
  )
}
