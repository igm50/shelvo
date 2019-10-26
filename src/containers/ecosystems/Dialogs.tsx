import React, { useState } from 'react'
import { Dialog, Box, makeStyles } from '@material-ui/core'
import {} from '@material-ui/styles'

import GoogleBookSearch from '../organisms/GoogleBookSearch'
import GoogleBookSummaryList from '../organisms/GoogleBookSummaryList'

const useStyle = makeStyles({
  wrapper: {
    padding: 10
  }
})

interface Props {
  open: boolean
  close: () => void
  dispatchIsbn: (isbn: string) => void
}

const Dialogs: React.FC<Props> = props => {
  const classes = useStyle()
  const [googleBookItems, setGoogleBookItems] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  return (
    <Dialog open={props.open} onClose={props.close} fullWidth={true}>
      <Box className={classes.wrapper}>
        <GoogleBookSearch
          dispatchLoading={setLoading}
          dispatchGoogleBookItems={setGoogleBookItems}
        />
        <GoogleBookSummaryList
          loading={loading}
          dispatchIsbn={props.dispatchIsbn}
          googleBookItems={googleBookItems}
        />
      </Box>
    </Dialog>
  )
}

export default Dialogs
