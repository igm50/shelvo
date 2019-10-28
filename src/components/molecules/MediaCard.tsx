import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  media: {
    maxWidth: 128,
    padding: 10
  }
})

interface Props {
  mediaSource: string
  title: string
}

const MediaCard: React.FC<Props> = props => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        src={props.mediaSource}
      />
      <CardContent>
        <Typography variant="h6">{props.title}</Typography>
        {props.children}
      </CardContent>
    </Card>
  )
}

export default MediaCard
