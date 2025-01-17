import React from 'react'
import { action } from '@storybook/addon-actions'

import { GoogleBookSummaryList } from './GoogleBookSummaryList'

export default {
  title: 'Organisms/GoogleBookSummaryList'
}

export const Loading = () => {
  return (
    <GoogleBookSummaryList
      googleBookItems={[]}
      loading={true}
      dispatchIsbn={action('')}
    />
  )
}

export const EmptyBooks = () => {
  return (
    <GoogleBookSummaryList
      googleBookItems={[]}
      loading={false}
      dispatchIsbn={action('')}
    />
  )
}

export const PresentBooks = () => {
  return (
    <GoogleBookSummaryList
      googleBookItems={[
        {
          volumeInfo: {
            title: 'タイトル',
            authors: ['著者'],
            publisher: '出版社',
            publishedDate: '2000-04-01',
            description:
              'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
            industryIdentifiers: [
              {
                type: 'ISBN_10',
                identifier: '0000000000'
              }
            ],
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
            }
          },
          searchInfo: {
            textSnippet:
              'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル'
          }
        },
        {
          volumeInfo: {
            title: 'タイトル',
            authors: ['著者'],
            publisher: '出版社',
            publishedDate: '2000-04-01',
            description:
              'サンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプルサンプル',
            industryIdentifiers: [
              {
                type: 'ISBN_13',
                identifier: '9999999999999'
              }
            ],
            imageLinks: {
              smallThumbnail:
                'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
              thumbnail:
                'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
            }
          },
          searchInfo: {
            textSnippet:
              '★２０１９年１０月２日（水）よりTVアニメ放送開始！★ シリーズ累計200万部突破！（電子書籍を含む） 【単話版】人気WEB小説『本好きの下剋上』がコミック化！ ...'
          }
        }
      ]}
      loading={false}
      dispatchIsbn={(isbn: string) => action(isbn)()}
    />
  )
}
