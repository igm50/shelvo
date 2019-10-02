import React from 'react'
import { Card, CardActionArea, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface Props {
  books: Book[]
}

const useStyles = makeStyles({
  root: {
    maxHeight: 300,
    maxWidth: 200
  }
})

const BookShelf: React.FC<Props> = props => {
  const classes = useStyles()

  return (
    <React.Fragment>
      {props.books.map((book, index) => (
        <Card className={classes.root} key={index}>
          <CardActionArea onClick={book.clickEvent}>
            <CardMedia component="img" src={book.imageSrc} />
          </CardActionArea>
        </Card>
      ))}
    </React.Fragment>
  )
}

export default BookShelf
