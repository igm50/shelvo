import React from 'react'
import _ from 'lodash'
import { Box } from '@material-ui/core'

import BookShelf from '../organisms/BookShelf'
import ManageShelves from '../organisms/ManageShelves'

export type Type = 'BookShelf' | 'ManageShelves'

interface Props {
  type: Type
}

const Contents: React.FC<Props> = props => {
  const booksDummy = _.range(30).map(index => {
    return {
      clickEvent: () => {},
      imageSrc:
        'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    }
  })

  return (
    <Box>
      {props.type === 'BookShelf' ? (
        <BookShelf books={booksDummy} />
      ) : (
        <ManageShelves />
      )}
    </Box>
  )
}

export default Contents
