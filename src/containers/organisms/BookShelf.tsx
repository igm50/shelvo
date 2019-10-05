import React from 'react'
import { Card, CardActionArea, CardMedia, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface Props {
  books: Book[]
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
    </Grid>
  )
}

export default BookShelf
