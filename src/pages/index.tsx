import React from 'react'
import Head from 'next/head'

import NetflixLogo from '../assets/netflix-logo.svg'
import { Container } from '../styles/pages/Home'
import { useFetch } from '../hooks/useFetch'
import api from '../services/api'
import { NextPage, GetStaticProps } from 'next'

interface Pokemon {
  results: {
    name: string
  }[]
}

interface PageProps {
  data: Pokemon
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get<Pokemon>('pokemon')
  return { props: { data: response.data } }
}

const Home: NextPage<PageProps> = props => {
  const { data } = useFetch<Pokemon>('pokemon', {
    initialData: props.data
  })

  if (!data) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <NetflixLogo />
      <h1>Structure</h1>
      <p>Structure paragraph</p>

      <ul>
        {data.results.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </Container>
  )
}

export default Home
