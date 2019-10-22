import React from 'react'
import { action } from '@storybook/addon-actions'

import BookRegistrator from './BookRegistrator'

export default {
  title: 'Organisms/BookRegistrator'
}

export const Sample = () => {
  return <BookRegistrator register={action('do register')} />
}
