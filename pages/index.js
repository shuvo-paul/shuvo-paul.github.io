import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Developer || JavaScript, ReactJs, NodeJs, PHP, Silverstripe</title>
      </Head>
      <Header/>
      <Hero/>
    </div>
  )
}