import React from 'react'
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  IconButton
} from '@material-ui/core'
import { AddCircle } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

interface Props {
  books: Book[]
  openBookRegistrator: () => void
}

const useStyles = makeStyles({
  root: {
    maxWidth: 150
  },
  media: {
    maxWidth: 128
  }
})

const BookShelf: React.FC<Props> = props => {
  const classes = useStyles()

  return (
    <Grid container justify="space-around" spacing={3}>
      {props.books.map((book, index) => (
        <Grid className={classes.root} item key={index}>
          <Card>
            <CardActionArea onClick={book.clickEvent}>
              <CardMedia
                className={classes.media}
                component="img"
                src={book.imageSrc}
              />
            </CardActionArea>
          </Card>
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

export default BookShelf
