import React, { useState } from 'react'
import { Box, TextField, makeStyles } from '@material-ui/core'
import {} from '@material-ui/icons'
import {} from '@material-ui/styles'

import { TextButton } from '../atoms/TextButton'
import { MediaCard } from '../molecules/MediaCard'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: 700
  },
  input: {
    paddingTop: 8,
    paddingBottom: 16
  },
  update: {
    textAlign: 'right'
  }
})

interface Props {
  book: Book
  dispatchComment: (newComment: string) => void
}

export const BookEditor: React.FC<Props> = props => {
  const classes = useStyles()
  const [comment, setComment] = useState(props.book.comment)

  return (
    <Box className={classes.root}>
      <MediaCard
        type="bookDisplay"
        title={props.book.title}
        mediaSource={props.book.imageSrc}
      >
        {props.book.comment}
      </MediaCard>
      <Box>
        <Box className={classes.input}>
          <TextField
            label="コメント編集"
            multiline
            rows={3}
            variant="outlined"
            defaultValue={props.book.comment}
            onChange={event => setComment(event.target.value)}
          />
        </Box>
        <Box className={classes.update}>
          <TextButton onClick={() => props.dispatchComment(comment)}>
            コメント更新
          </TextButton>
        </Box>
      </Box>
    </Box>
  )
}
