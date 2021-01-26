import * as React from 'react'
import { InferGetStaticPropsType } from 'next'

import Trip from '../components/trips/trip'
import Navigation from '../components/navigation/Navigation'

import { ITrip } from '../types'

const API_URL: string = 'http://localhost:3000/api/v1/trips'


export default function IndexPage({trips,}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [tripList, setTripList] = React.useState(trips)

  if (!tripList) return <h1>Loading...</h1>

  return (
    <div>
      <Navigation></Navigation>

      <main className='container'>
        <h1>My posts</h1>

        {tripList.map((trip: ITrip) => (

          <Trip key={trip.id} trip={trip} />

        ))}
      </main>
    </div>
    )
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
