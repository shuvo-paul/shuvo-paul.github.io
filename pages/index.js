import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {marked} from 'marked'
import Head from 'next/head'
import {Fragment} from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import getDataFromMdDir from '../lib/getDataFromMdDir'
import Footer from '../components/Footer'
import OffCanvas from '../components/OffCanvas'

export default function Home({hero, experiencesList, projectsList}) {
  return (
    <Fragment>
      <OffCanvas/>
      <div className='page-wrap relative'>
        <div className="absolute top-[256px] left-[17%] anim_circle">
          <div className="w-6 h-6 border-2 border-primary-700"></div>
        </div>
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
    </Fragment>
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