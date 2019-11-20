import React, { useState, useCallback } from 'react'
import { action } from '@storybook/addon-actions'

import { BookEditor } from './BookEditor'

export default {
  title: 'Organisms/BookEditor'
}

const SampleStory: React.FC = () => {
  const [comment, setComment] = useState('サンプルコメント')

  const dispatchComment = useCallback(() => {
    return (newComment: string) => {
      action(newComment)()
      setComment(newComment)
    }
  }, [])

  return (
    <BookEditor
      book={{
        clickEvent: () => {},
        imageSrc:
          'http://books.google.com/books/content?id=jk02tgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        title: 'サンプルタイトル',
        comment: comment
      }}
      dispatchComment={dispatchComment()}
    />
  )
}

export const Sample = () => <SampleStory />
