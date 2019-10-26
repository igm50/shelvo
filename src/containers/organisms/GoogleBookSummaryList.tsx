import React, { useMemo } from 'react'
import _ from 'lodash'
import { List, ListItem } from '@material-ui/core'

import TextButton from '../../components/atoms/TextButton'
import MediaCard from '../../components/molecules/MediaCard'

interface GoogleBookItem {
  volumeInfo: {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: [
      {
        type: 'ISBN_10' | 'ISBN_13' | 'OTHER'
        identifier: string
      }
    ]
    imageLinks?: {
      smallThumbnail: string
      thumbnail: string
    }
  }
  searchInfo?: {
    textSnippet: string
  }
}

interface Props {
  googleBookItems: GoogleBookItem[]
  action: {
    label: string
    do: (identifier: string) => void
  }
}

const GoogleBookSummaryList: React.FC<Props> = props => {
  const doAction = useMemo(() => {
    return (param: { type: string; identifier: string }): string => {
      return param.type === 'ISBN_10'
        ? 'isbn10:' + param.identifier
        : param.type === 'ISBN_13'
        ? 'isbn13' + param.identifier
        : ''
    }
  }, [])

  const books = useMemo(() => {
    return _.chain(props.googleBookItems)
      .filter(item => item.volumeInfo.imageLinks !== undefined)
      .filter(item => item.searchInfo !== undefined)
      .map(item => {
        return {
          mediaSource: item.volumeInfo.imageLinks!.thumbnail,
          title: item.volumeInfo.title,
          text: item.searchInfo!.textSnippet,
          action: doAction(item.volumeInfo.industryIdentifiers[0])
        }
      })
      .value()
  }, [doAction, props.googleBookItems])

  return (
    <List>
      {books.map((book, index) => (
        <MediaCard
          key={index.toString()}
          mediaSource={book.mediaSource}
          title={book.title}
        >
          {book.text}
        </MediaCard>
      ))}
      <ListItem></ListItem>
    </List>
  )
}

export default GoogleBookSummaryList
