import React from 'react'
import Head from 'next/head'
import Appbar from '../components/Appbar'
import QAccordian from '../components/QAccordian'

const Quran = () => 
{
  return (
    <div>
        <Head>
            <title>The Quran</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Appbar />
        <QAccordian />
    </div>
  )
}

export default Quran