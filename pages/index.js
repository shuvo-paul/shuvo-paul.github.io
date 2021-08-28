import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Developer || JavaScript, ReactJs, NodeJs, PHP, Silverstripe</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Chivo:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <Header/>
      <Hero/>
    </div>
  )
}