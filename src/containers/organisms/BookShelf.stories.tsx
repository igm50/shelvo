import React from 'react'
import { action } from '@storybook/addon-actions'

import BookShelf from './BookShelf'

export default {
  title: 'Organisms/BookShelf'
}

export const Sample = () => (
  <BookShelf
    books={[
      {
        clickEvent: action('clicked1'),
        imageSrc:
          'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
      },
      {
        clickEvent: action('clicked2'),
        imageSrc:
          'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
      }
    ]}
  />
)
