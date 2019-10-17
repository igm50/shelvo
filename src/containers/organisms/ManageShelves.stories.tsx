import React from 'react'

import ManageShelves from './ManageShelves'
import usePartDispatcher from '../../hooks/usePartDispatcher'

export default {
  title: 'Organisms/ManageShelves'
}

const SampleStory = () => {
  const initShelves = [
    {
      label: '本棚1',
      release: false
    },
    {
      label: '本棚2',
      release: false
    },
    {
      label: '本棚3',
      release: true
    }
  ]

  const [shelves, updateShelves] = usePartDispatcher(initShelves)

  return <ManageShelves shelves={shelves} dispatchShelves={updateShelves} />
}

export const Sample = () => <SampleStory />
