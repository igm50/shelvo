import React from 'react'
import { action } from '@storybook/addon-actions'

import TextButton from './TextButton'

export default {
  title: 'Atoms/TextButton'
}

export const Blue = () => {
  return <TextButton onClick={action('clicked')}>Sample</TextButton>
}

export const Red = () => {
  return (
    <TextButton color="Red" onClick={action('clicked')}>
      Sample
    </TextButton>
  )
}
