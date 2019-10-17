import React, { useState } from 'react'

import SingleSwitch from './SingleSwitch'

export default {
  title: 'Molecules/SingleSwitch'
}

const OnlyLabelStory = () => {
  const [state, setState] = useState(false)
  return <SingleSwitch label="サンプル" value={state} onSwitch={setState} />
}

const WithStatesStory = () => {
  const [state, setState] = useState(false)
  return (
    <SingleSwitch
      label="サンプル"
      value={state}
      onSwitch={setState}
      onState="オン"
      offState="オフ"
    />
  )
}

export const OnlyLabel = () => <OnlyLabelStory />
export const WithState = () => <WithStatesStory />
