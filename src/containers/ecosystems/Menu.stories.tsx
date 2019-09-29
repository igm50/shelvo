import React from 'react'
import { action } from '@storybook/addon-actions'

import Menu from './Menu'

export default {
  title: 'Ecosystems/Menu'
}

export const Sample = () => <Menu isOpen={false} close={action('close')} />
