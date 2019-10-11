import React, { useState, useCallback, useMemo, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import { Box, Typography, CircularProgress, TextField } from '@material-ui/core'

import GoogleBookSummary from '../../components/molecules/GoogleBookSummary'

interface Props {}

const BookRegistrator: React.FC<Props> = props => {
  const [word, setWord] = useState('')
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<AxiosResponse | undefined>(undefined)

  const getBooks = useCallback(() => {
    setLoading(true)
    axios
      .get('https://www.googleapis.com/books/v1/volumes?q=' + word)
      .then(res => setResponse(res))
  }, [word])

  const books = useMemo<any[]>(() => {
    return response === undefined || response.data.items === undefined
      ? []
      : response.data.items
  }, [response])

  useEffect(() => getBooks, [getBooks, word])

  useEffect(() => {
    if (response !== undefined) setLoading(false)
  }, [response])

  return (
    <Box>
      <Typography>書籍登録</Typography>
      <TextField
        label="検索"
        value={word}
        onChange={event => setWord(event.target.value)}
      />
      <Typography>検索結果</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        books.map(book => <GoogleBookSummary googleBookItem={book} />)
      )}
    </Box>
  )
}

export default BookRegistrator
