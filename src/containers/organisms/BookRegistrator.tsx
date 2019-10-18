import React, { useState, useMemo } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Box, Typography, CircularProgress } from '@material-ui/core'

import GoogleBookSummary from '../../components/molecules/GoogleBookSummary'
import SimpleSearch from '../../components/molecules/SimpleSearch'

interface Props {}

const BookRegistrator: React.FC<Props> = props => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<AxiosResponse | undefined>(undefined)

  const getBooks = useMemo(() => {
    return (word: string) => {
      setLoading(true)
      axios
        .get('https://www.googleapis.com/books/v1/volumes?q=' + word)
        .then(res => setResponse(res))
        .catch(() => setResponse(undefined))
        .finally(() => setLoading(false))
    }
  }, [])

  const books = useMemo<any[]>(() => {
    return response === undefined || response.data.items === undefined
      ? []
      : response.data.items
  }, [response])

  const search = useMemo(() => {
    return (word: string) => {
      getBooks(word)
    }
  }, [getBooks])

  return (
    <Box>
      <Typography variant="h5">書籍登録</Typography>
      <SimpleSearch dispatchWord={search} />
      {loading ? (
        <CircularProgress />
      ) : (
        books.map((book, index) => (
          <GoogleBookSummary key={index} googleBookItem={book} />
        ))
      )}
    </Box>
  )
}

export default BookRegistrator
