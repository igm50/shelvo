import React from 'react'
import _ from 'lodash'
import { action } from '@storybook/addon-actions'

import BookShelf from './BookShelf'

export default {
  title: 'Organisms/BookShelf'
}

export const Sample = () => {
  const dummy = _.range(30).map(index => {
    return {
      clickEvent: action('clicked' + index),
      title: 'あいうえおかきくけこさしすせそ',
      comment:
        'サンプルコメントサンプルコメントサンプルコメントサンプルコメント',
      imageSrc:
        'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    }
  })

  return (
    <BookShelf
      books={dummy}
      openBookRegistrator={action('openBookRegistrator')}
    />
  )
}
