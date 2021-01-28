// components/Post.tsx

import * as React from 'react'
import { Trip } from '../../types'

type Props = {
  trip: Trip
}

const TripTile: React.FC<Props> = ({ trip }) => {
  return (
    <div className='Card'>
      <div className='Card--body'>
        <h1 className='Card--body-title'>{trip.title}</h1>
      </div>
    </div>
  )
}

export default TripTile
