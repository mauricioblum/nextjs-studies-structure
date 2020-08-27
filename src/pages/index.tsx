import React from 'react'
import Head from 'next/head'

import NetflixLogo from '../assets/netflix-logo.svg'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <NetflixLogo />
        <h1>Hello world!!</h1>
      </main>

      <footer>
        <p>Hello footer!</p>
      </footer>
    </div>
  )
}

export default Home
