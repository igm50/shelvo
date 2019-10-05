import React, { useState, useEffect } from 'react'
import { action } from '@storybook/addon-actions'

import Dialogs from './Dialogs'

export default {
  title: 'Ecosystems/Dialogs'
}

const SampleStory = () => {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(true), [])

  return <Dialogs isOpen={open} close={action('closeAction')} />
}

export const Sample = () => <SampleStory />
