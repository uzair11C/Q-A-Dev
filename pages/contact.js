import React from 'react'
import Head from 'next/head'
import Appbar from '../components/Appbar'
import { Stack } from '@mui/material';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Appbar />
    </div>
  )
}

export default Contact