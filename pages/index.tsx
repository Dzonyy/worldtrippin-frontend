import * as React from 'react'
import { InferGetStaticPropsType } from 'next'

import Layout from '../components/layout/Layout'
import TripTile from '../components/trips/TripTile'
import Navigation from '../components/navigation/Navigation'

import { Trip } from '../types'

const API_URL: string = 'http://localhost:3000/api/v1/trips'


export default function IndexPage({trips,}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [tripList, setTripList] = React.useState(trips)

  if (!tripList) return <h1>Loading...</h1>

  return (
    <Layout>
      <Navigation></Navigation>

      <main className='container'>

        {tripList.map((trip: Trip) => (

          <TripTile key={trip.id} trip={trip} />

        ))}
      </main>
    </Layout>
    )
}

export async function getStaticProps() {
  const res = await fetch(API_URL)
  const trips: Trip[] = await res.json()

  return {
    props: {
      trips,
    },
  }
}
