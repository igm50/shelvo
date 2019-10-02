import React from 'react'
import { Box } from '@material-ui/core'

import BookCard from '../organisms/BookCard'

const Contents: React.FC = () => {
  return (
    <Box>
      <BookCard
        clickEventHandler={() => {}}
        imgSrc="http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      />
    </Box>
  )
}

export default Contents
