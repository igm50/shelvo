import React from 'react'
import { action } from '@storybook/addon-actions'

import Header from './Header'

export default {
  title: 'Ecosystems/Header'
}

export const Sample = () => <Header toggleMenu={action('change open')} />
