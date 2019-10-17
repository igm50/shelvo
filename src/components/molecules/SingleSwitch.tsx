import React from 'react'
import { Grid, Typography, Switch } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  label: {
    color: grey[700]
  }
})

interface Props {
  label: string
  value: boolean
  onSwitch: (checked: boolean) => void
  offState?: string
  onState?: string
  className?: string
}

const SingleSwitch: React.FC<Props> = props => {
  const classes = useStyles()

  return (
    <div className={props.className}>
      <Typography className={classes.label} variant="h5">
        {props.label}
      </Typography>
      <Grid container component="label" alignItems="center">
        {props.offState && <Grid item>{props.offState}</Grid>}
        <Grid item>
          <Switch
            checked={props.value}
            onChange={event => props.onSwitch(event.target.checked)}
          />
        </Grid>
        {props.onState && <Grid item>{props.onState}</Grid>}
      </Grid>
    </div>
  )
}

export default SingleSwitch
