import Header from "../components/Header";
import { Fragment } from "react";
import Head from "next/head";
import Line from "../components/Line";
import App from "../container/App";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </Fragment>
  );
}
