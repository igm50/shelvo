import React, { useMemo, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import useFetch from 'use-http'

import { SimpleSearch } from '../molecules/SimpleSearch'

interface Props {
  dispatchLoading: (loading: boolean) => void
  dispatchGoogleBookItems: (items: any[]) => void
}

export const GoogleBookSearch: React.FC<Props> = props => {
  const request = useFetch('https://www.googleapis.com/books/v1/volumes')

  const search = useMemo(() => {
    return (word: string) => {
      if (word.length === 0) props.dispatchGoogleBookItems([])
      else
        request
          .get('?q=' + word)
          .then(response => props.dispatchGoogleBookItems(response.items))
    }
  }, [props, request])

  useEffect(() => props.dispatchLoading(request.loading), [props, request])

  return (
    <Box>
      <Typography variant="h5">書籍登録</Typography>
      <SimpleSearch dispatchWord={search} />
    </Box>
  )
}
