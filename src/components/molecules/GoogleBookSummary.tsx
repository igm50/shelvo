import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

type GoogleBookItem = {
  volumeInfo: {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    industryIdentifiers: {
      type: 'ISBN_10' | 'ISBN_13' | 'OTHER'
      identifier: string
    }
    imageLinks?: {
      smallThumbnail: string
      thumbnail: string
    }
  }
}

interface Props {
  googleBookItem: GoogleBookItem
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

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        src={
          props.googleBookItem.volumeInfo.imageLinks
            ? props.googleBookItem.volumeInfo.imageLinks.thumbnail
            : ''
        }
      />
      <CardContent>
        <Typography>{props.googleBookItem.volumeInfo.title}</Typography>
      </CardContent>
    </Card>
  )
}

export default GoogleBookSummary
