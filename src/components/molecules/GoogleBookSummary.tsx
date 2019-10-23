import React, { useCallback } from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import TextButton from '../atoms/TextButton'

type GoogleBookItem = {
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
  googleBookItem: GoogleBookItem
  action: {
    label: string
    do: (identifier: string) => void
  }
}

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  media: {
    maxWidth: 128,
    padding: 10
  }
})

const GoogleBookSummary: React.FC<Props> = props => {
  const classes = useStyles()

  const doAction = useCallback(() => {
    const firstIndustryIdentifiers =
      props.googleBookItem.volumeInfo.industryIdentifiers[0]
    const identifier =
      firstIndustryIdentifiers.type === 'ISBN_10'
        ? 'isbn10:' + firstIndustryIdentifiers.identifier
        : firstIndustryIdentifiers.type === 'ISBN_13'
        ? 'isbn13' + firstIndustryIdentifiers.identifier
        : ''
    props.action.do(identifier)
  }, [props.action, props.googleBookItem.volumeInfo.industryIdentifiers])

  return (
    <Card className={classes.root}>
      {props.googleBookItem.volumeInfo.imageLinks ? (
        <CardMedia
          className={classes.media}
          component="img"
          src={
            props.googleBookItem.volumeInfo.imageLinks
              ? props.googleBookItem.volumeInfo.imageLinks.thumbnail
              : ''
          }
        />
      ) : (
        <CardContent>
          <Typography>画像はありません。</Typography>
        </CardContent>
      )}
      <CardContent>
        <Typography variant="h6">
          {props.googleBookItem.volumeInfo.title}
        </Typography>
        <Typography>
          {props.googleBookItem.searchInfo
            ? props.googleBookItem.searchInfo.textSnippet
            : '概要はありません。'}
        </Typography>
        <TextButton onClick={doAction}>{props.action.label}</TextButton>
      </CardContent>
    </Card>
  )
}

export default GoogleBookSummary
