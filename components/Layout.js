import React from 'react'
import Head from 'next/head'
import Header from './Header'
export default function Layout({children}) {
  return (
    <>
    <Head>
      <title>DX Pro Tech</title>
      <meta name="description" content="Find all your technical solutions here" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <Header/>
      <div className='main'>
        {children}
      </div>
    </>
  )
}
