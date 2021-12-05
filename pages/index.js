import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'

export default function Home({hero}) {
  return (
    <div>
      <Head>
        <title>Web Developer || JavaScript, ReactJs, NodeJs, PHP, Silverstripe</title>
      </Head>
      <Header/>
      <Hero {...hero} />
    </div>
  )
}

export async function getStaticProps() {
  const heroMdWithMeta = fs.readFileSync(path.join('markdowns', 'hero.md'));

  const hero = matter(heroMdWithMeta);

  return {
    props: {
      hero: {
        title: hero.data.title,
        techs: hero.data.techs,
        content: marked(hero.content)
      }
    }
  }
}