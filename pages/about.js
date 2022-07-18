import React from 'react'
import Head from 'next/head'
import Appbar from '../components/Appbar'
import AboutContent from '../components/AboutContent'

const About = () => 
{
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar />
      <AboutContent />
    </div>
  )
}

export default About