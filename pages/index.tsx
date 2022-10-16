import Head from "next/head";
import Image from "next/image";
import React from "react";
import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Hoang anh | Web developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Skill></Skill>
    </React.Fragment>
  );
}
