import React, { useState, useMemo } from 'react'
import { Box, Typography, CircularProgress } from '@material-ui/core'
import useFetch from 'use-http'

import GoogleBookSummary from '../../components/molecules/GoogleBookSummary'
import SimpleSearch from '../../components/molecules/SimpleSearch'

interface Props {
  register: (identifier: string) => void
}

const BookRegistrator: React.FC<Props> = props => {
  const request = useFetch('https://www.googleapis.com/books/v1/volumes')
  const [books, setBooks] = useState<any[] | undefined>([])

  const search = useMemo(() => {
    return (word: string) => {
      if (word.length === 0) setBooks(undefined)
      else request.get('?q=' + word).then(response => setBooks(response.items))
    }
  }, [request])

  return (
    <Box>
      <Typography variant="h5">書籍登録</Typography>
      <SimpleSearch dispatchWord={search} />
      {request.loading ? (
        <CircularProgress />
      ) : books === undefined ? (
        <Typography>検索結果はありません。</Typography>
      ) : (
        books.map((book, index) => (
          <GoogleBookSummary
            key={index}
            googleBookItem={book}
            action={{ label: '登録', do: props.register }}
          />
        ))
      )}
    </Box>
  )
}

export default BookRegistrator
