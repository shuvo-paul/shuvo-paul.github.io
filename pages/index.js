import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import getDataFromMdDir from '../lib/getDataFromMdDir'
import Footer from '../components/Footer'

export default function Home({hero, experiencesList, projectsList}) {
  return (
    <div className='page-wrap'>
      <Head>
          <title>Web Developer || JavaScript, ReactJs, NodeJs, PHP, Silverstripe</title>
      </Head>
      <Header/>
      <div className='container'>
        <div className="max-w-6xl mx-auto">
          <Hero {...hero} />
          <Experiences list={experiencesList} />
          <Projects list={projectsList} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const heroMdWithMeta = fs.readFileSync(path.join('markdowns', 'hero.md'));
  const hero = matter(heroMdWithMeta);

  const experiencesList = getDataFromMdDir('experiences');
  const projectsList = getDataFromMdDir('projects');

  return {
    props: {
      hero: {
        title: hero.data.title,
        techs: hero.data.techs,
        content: marked(hero.content)
      },
      experiencesList,
      projectsList
    }
  }
}