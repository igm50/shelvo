import React from 'react'

import GoogleBookSummary from './GoogleBookSummary'

export default {
  title: 'Molecules/GoogleBookSummary'
}

export const Sample = () => {
  return (
    <GoogleBookSummary
      googleBookItem={{
        volumeInfo: {
          title: 'タイトル',
          authors: ['著者'],
          publisher: '出版社',
          publishedDate: '2000-04-01',
          industryIdentifiers: {
            type: 'ISBN_10',
            identifier: '0000000000'
          },
          imageLinks: {
            smallThumbnail:
              'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            thumbnail:
              'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
          }
        }
      }}
    />
  )
}
