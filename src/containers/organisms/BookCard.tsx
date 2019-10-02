import React from 'react'
import { Card, CardActionArea, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

interface Props {
  clickEventHandler: () => void
  imgSrc: string
}

const useStyles = makeStyles({
  root: {
    maxHeight: 300,
    maxWidth: 200
  }
})

const BookCard: React.FC<Props> = props => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={props.clickEventHandler}>
        <CardMedia component="img" src={props.imgSrc} />
      </CardActionArea>
    </Card>
  )
}

export default BookCard
