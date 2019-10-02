import React from 'react'
import { action } from '@storybook/addon-actions'

import BookCard from './BookCard'

export default {
  title: 'Organisms/BookCard'
}

export const Sample = () => (
  <BookCard
    clickEventHandler={action('clicked')}
    imgSrc="http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  />
)
