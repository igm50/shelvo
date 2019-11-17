import React from 'react'
import { action } from '@storybook/addon-actions'

import { Dialogs } from './Dialogs'

export default {
  title: 'Ecosystems/Dialogs'
}

export const Sample = () => {
  return (
    <Dialogs
      open={true}
      close={action('close')}
      dispatchIsbn={(isbn: string) => action(isbn)()}
    />
  )
}
