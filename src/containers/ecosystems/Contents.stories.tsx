import React from 'react'
import { action } from '@storybook/addon-actions'

import Contents from './Contents'

export default {
  title: 'Ecosystems/Contents'
}

export const Sample = () => (
  <Contents openBookRegistrator={action('openBookRegistrator')} />
)
