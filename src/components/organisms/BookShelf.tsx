import React from 'react'
import { Grid, IconButton } from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

import { MediaCard } from '../molecules/MediaCard'

interface Props {
  books: Book[]
  openBookRegistrator: () => void
}

const useStyles = makeStyles({
  root: {
    width: 300
  },
  media: {
    maxWidth: 128
  }
})

export const BookShelf: React.FC<Props> = props => {
  const classes = useStyles()

  return (
    <Grid container justify="flex-start" spacing={3}>
      {props.books.map((book, index) => (
        <Grid className={classes.root} item key={index}>
          <MediaCard
            type="bookDisplay"
            title={book.title}
            mediaSource={book.imageSrc}
          >
            {book.comment}
          </MediaCard>
        </Grid>
      ))}
      <Grid className={classes.root} item key="add">
        <IconButton color="primary" onClick={props.openBookRegistrator}>
          <AddCircle />
        </IconButton>
      </Grid>
    </Grid>
  )
}
