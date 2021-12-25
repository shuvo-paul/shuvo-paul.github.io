import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'

export default function Home({hero, experiencesList}) {
  return (
    <div>
      <Head>
        <title>Web Developer || JavaScript, ReactJs, NodeJs, PHP, Silverstripe</title>
      </Head>
      <Header/>
      <Hero {...hero} />
      <Experiences list={experiencesList} />
      <Projects list={[[], []]} />
    </div>
  )
}

export async function getStaticProps() {
  const heroMdWithMeta = fs.readFileSync(path.join('markdowns', 'hero.md'));
  const hero = matter(heroMdWithMeta);

  const experiencesFiles = fs.readdirSync(path.join('markdowns', 'experiences'));

  const experiencesList = experiencesFiles.map(filename=>{
    const mdWithMeta = fs.readFileSync(path.join('markdowns/experiences', filename));
    const {data, content} = matter(mdWithMeta);
    return {
      ...data,
      content
    }
  })

  return {
    props: {
      hero: {
        title: hero.data.title,
        techs: hero.data.techs,
        content: marked(hero.content)
      },
      experiencesList
    }
  }
}