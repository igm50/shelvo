import React, { useState, useCallback } from 'react'
import { InputBase, Paper, IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  input: {
    marginLeft: 10
  }
})

interface Props {
  initWord?: string
  dispatchWord: (word: string) => void
}

const SimpleSearch: React.FC<Props> = props => {
  const classes = useStyles()
  const [word, setWord] = useState(props.initWord || '')

  const onClick = useCallback(() => props.dispatchWord(word), [props, word])

  return (
    <Paper elevation={0}>
      <InputBase
        className={classes.input}
        placeholder="検索ワードを入力"
        value={word}
        onChange={event => setWord(event.target.value)}
      />
      <IconButton onClick={onClick}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SimpleSearch
