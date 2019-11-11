import React from 'react'
import { action } from '@storybook/addon-actions'

import { SimpleSearch } from './SimpleSearch'

export default {
  title: 'Molecules/SimpleSearch'
}

export const Sample = () => {
  return <SimpleSearch dispatchWord={(word: string) => action(word)()} />
}
