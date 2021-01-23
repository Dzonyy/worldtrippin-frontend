import * as React from 'react'
import { InferGetStaticPropsType } from 'next'

import styles from 'styles/globals.scss'

import Trip from '../components/trips/trip'
import { ITrip } from '../types'

const API_URL: string = 'http://localhost:3000/api/v1/trips'


export default function IndexPage({trips,}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [tripList, setTripList] = React.useState(trips)

  if (!tripList) return <h1>Loading...</h1>

  return (
    <main className='container'>
      <h1>My posts</h1>

      {tripList.map((trip: ITrip) => (

        <Trip key={trip.id} trip={trip} />

      ))}
    </main>  )
}

export async function getStaticProps() {
  const res = await fetch(API_URL)
  const trips: ITrip[] = await res.json()

  return {
    props: {
      trips,
    },
  }
}
