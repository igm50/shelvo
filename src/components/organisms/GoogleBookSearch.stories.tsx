import React from 'react'
import { action } from '@storybook/addon-actions'

import { GoogleBookSearch } from './GoogleBookSearch'

export default {
  title: 'Organisms/GoogleBookSearch'
}

export const Sample = () => {
  return (
    <GoogleBookSearch
      dispatchLoading={(loading: boolean) => action(String(loading))()}
      dispatchGoogleBookItems={(anyArray: any[]) =>
        action(anyArray.map(item => JSON.stringify(item)).toString())()
      }
    />
  )
}
