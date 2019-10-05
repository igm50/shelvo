import React from 'react'
import { Dialog } from '@material-ui/core'

interface Props {
  isOpen: boolean
  close: () => void
}

const Dialogs: React.FC<Props> = props => {
  return (
    <Dialog open={props.isOpen} onClose={props.close}>
      <div>ダイアログ</div>
    </Dialog>
  )
}

export default Dialogs
