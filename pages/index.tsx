import Head from 'next/head'
import React from 'react';
import {NextPage} from 'next';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next Index111</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/post">
        <a>sdfsdfsdf</a>
      </Link>

      <div><p>dfdsfsdfsdf</p>demo222</div>

    </div>
  )
}
export default Index
