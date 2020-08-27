import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Hello world!!</h1>
      </main>

      <footer>
        <p>Hello footer!</p>
      </footer>
    </div>
  )
}

export default Home
