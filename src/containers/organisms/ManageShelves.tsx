import React from 'react'
import { Container, Typography, Toolbar, makeStyles } from '@material-ui/core'
import {} from '@material-ui/styles'

import SingleSwitch from '../../components/molecules/SingleSwitch'

const useStyles = makeStyles({
  title: {
    marginBottom: 32
  },
  item: {
    marginBottom: 16
  }
})

interface Props {
  shelves: {
    label: string
    release: boolean
  }[]
  dispatchShelves: (
    index: number
  ) => (shelf: { label: string; release: boolean }) => void
}

const ManageShelves: React.FC<Props> = props => {
  const classes = useStyles()

  return (
    <Container>
      <Toolbar />
      <Typography className={classes.title} variant="h4">
        本棚管理
      </Typography>
      {props.shelves &&
        props.shelves.map((shelf, index) => (
          <SingleSwitch
            className={classes.item}
            label={shelf.label}
            value={shelf.release}
            onSwitch={(checked: boolean) =>
              props.dispatchShelves(index)({
                label: shelf.label,
                release: checked
              })
            }
            onState="公開"
            offState="非公開"
            key={index}
          />
        ))}
    </Container>
  )
}

export default ManageShelves
