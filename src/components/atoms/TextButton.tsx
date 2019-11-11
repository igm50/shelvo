import React, { useMemo } from 'react'
import { Button } from '@material-ui/core'
import {} from '@material-ui/core/colors'

type Color = 'Red' | 'Blue'

interface Props {
  children: string
  onClick: () => void
  color?: Color
}

export const TextButton: React.FC<Props> = props => {
  const color = useMemo(() => {
    if (props.color === undefined || props.color === 'Blue') return 'primary'
    else return 'secondary'
  }, [props])

  return (
    <Button color={color} onClick={props.onClick} variant="contained">
      {props.children}
    </Button>
  )
}
