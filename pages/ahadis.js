import React from 'react'
import Head from 'next/head'
import Appbar from '../components/Appbar'
import HAccordian from '../components/HAccordian'

const Ahadis = () => 
{
  return (
    <div>
        <Head>
            <title>Ahadis</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Appbar />
        <HAccordian />
    </div>
  )
}

export default Ahadis