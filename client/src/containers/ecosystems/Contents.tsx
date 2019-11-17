import React from 'react'
import _ from 'lodash'
import { Box } from '@material-ui/core'

import { BookShelf } from '../../components/organisms/BookShelf'

interface Props {
  openBookRegistrator: () => void
}

export const Contents: React.FC<Props> = props => {
  const dummy = _.range(30).map(index => {
    return {
      clickEvent: () => {},
      title: 'ダミー',
      comment: 'ダミー',
      imageSrc:
        'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
    }
  })

  return (
    <Box>
      <BookShelf
        books={dummy}
        openBookRegistrator={props.openBookRegistrator}
      />
    </Box>
  )
}
