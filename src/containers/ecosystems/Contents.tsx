import React, { useState } from 'react'
import { Box } from '@material-ui/core'

import BookShelf from '../organisms/BookShelf'

const Contents: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([
    {
      clickEvent: () => {},
      imageSrc:
        'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    },
    {
      clickEvent: () => {},
      imageSrc:
        'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    }
  ])

  return (
    <Box>
      <BookShelf books={books} />
    </Box>
  )
}

export default Contents
