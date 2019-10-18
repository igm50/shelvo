import React from 'react'
import { Dialog } from '@material-ui/core'

import BookRegistrator from '../organisms/BookRegistrator'

interface Props {
  isOpen: boolean
  close: () => void
}

const Dialogs: React.FC<Props> = props => {
  return (
    <Dialog open={props.isOpen} onClose={props.close} fullWidth={true}>
      <BookRegistrator />
    </Dialog>
  )
}

export default Dialogs
