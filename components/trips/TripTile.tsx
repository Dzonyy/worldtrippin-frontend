// components/Post.tsx

import * as React from 'react'
import { Trip } from '../../types'

type Props = {
  trip: Trip
}

const TripTile: React.FC<Props> = ({ trip }) => {
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg my-24">
      <div class="p-4 sm:px-6 bg-gray-800">
        <h3 class="text-lg leading-6 font-medium">
          {trip.title}
        </h3>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-2">
            <dt class="text-sm font-medium text-gray-500">
              Data początkowa:
            </dt>
            <dd class="mt-1 text-sm text-gray-900">
              {trip.start_at}
            </dd>
          </div>
          <div class="bg-white px-4 py-2">
            <dt class="text-sm font-medium text-gray-500">
              Data końcowa:
            </dt>
            <dd class="mt-1 text-sm text-gray-900">
              {trip.end_at}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2">
            <dt class="text-sm font-medium text-gray-500">
              Lokalizacja:
            </dt>
            <dd class="mt-1 text-sm text-gray-900">
              {trip.location}
            </dd>
          </div>
          <div class="bg-gray-50 px-4 py-2">
            <dt class="text-sm font-medium text-gray-500">
              Opis:
            </dt>
            <dd class="mt-1 text-sm text-gray-900">
              {trip.description}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default TripTile
