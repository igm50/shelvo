import React, { useMemo } from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

type Type = 'root' | 'bookDisplay'

const useRootStyles = makeStyles({
  root: {
    display: 'flex'
  },
  media: {
    maxWidth: 128,
    padding: 10
  },
  content: {}
})

const useLimitedStyles = makeStyles({
  root: {},
  media: {
    maxWidth: 128,
    padding: 10,
    margin: '0 auto'
  },
  content: {
    textAlign: 'center'
  }
})

interface Props {
  type?: Type
  mediaSource: string
  title: string
}

const MediaCard: React.FC<Props> = props => {
  const rootClasses = useRootStyles()
  const bookDisplayClasses = useLimitedStyles()

  const shortenedTitle = useMemo(
    () =>
      props.title.length <= 12
        ? props.title
        : props.title.substring(0, 10) + '……',
    [props]
  )

  const params = useMemo(
    () =>
      props.type === 'bookDisplay'
        ? {
            classes: bookDisplayClasses,
            elevation: 0,
            title: shortenedTitle
          }
        : {
            classes: rootClasses,
            elevation: 1,
            title: props.title
          },
    [bookDisplayClasses, props.title, props.type, rootClasses, shortenedTitle]
  )

  return (
    <Card className={params.classes.root} elevation={params.elevation}>
      <CardMedia
        className={params.classes.media}
        component="img"
        src={props.mediaSource}
      />
      <CardContent className={params.classes.content}>
        <Typography variant="h6">{params.title}</Typography>
        {props.children}
      </CardContent>
    </Card>
  )
}

export default MediaCard
