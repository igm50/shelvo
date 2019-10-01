import React, { useState, useEffect } from 'react'
import { action } from '@storybook/addon-actions'

import Menu from './Menu'

export default {
  title: 'Ecosystems/Menu'
}

const SampleStory = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(true), [])

  return <Menu isOpen={open} close={action('close')} />
}

export const Sample = () => <SampleStory />
