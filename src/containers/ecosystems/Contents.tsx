import React from 'react'
import _ from 'lodash'
import { Box } from '@material-ui/core'

import BookShelf from '../organisms/BookShelf'

const Contents: React.FC = () => {
  const dummy = _.range(30).map(index => {
    return {
      clickEvent: () => {},
      imageSrc:
        'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    }
  })

  return (
    <Box>
      <BookShelf books={dummy} />
    </Box>
  )
}

export default Contents
