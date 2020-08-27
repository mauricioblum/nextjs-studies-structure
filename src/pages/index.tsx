import React from 'react'
import Head from 'next/head'

import NetflixLogo from '../assets/netflix-logo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <NetflixLogo />
      <h1>Structure</h1>
      <p>Structure paragraph</p>
    </Container>
  )
}

export default Home
