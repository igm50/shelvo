import React from 'react'
import { Typography } from '@material-ui/core'

import MediaCard from './MediaCard'

export default {
  title: 'Molecules/MediaCard'
}

export const Sample = () => {
  return (
    <MediaCard
      mediaSource="http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      title="サンプルタイトル"
    >
      <Typography>サンプルテキスト</Typography>
    </MediaCard>
  )
}
