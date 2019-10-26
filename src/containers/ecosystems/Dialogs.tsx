import React from 'react'
import { Dialog } from '@material-ui/core'

import GoogleBookSearch from '../organisms/GoogleBookSearch'

interface Props {
  isOpen: boolean
  close: () => void
}

const Dialogs: React.FC<Props> = props => {
  return (
    <Dialog open={props.isOpen} onClose={props.close} fullWidth={true}>
      <GoogleBookSearch />
    </Dialog>
  )
}

export default Dialogs
