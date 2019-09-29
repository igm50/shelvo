import React from 'react'

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

interface Props {
  toggleMenu: () => void
}

const Header: React.FC<Props> = props => {
  return (
    <AppBar color="inherit">
      <Toolbar>
        <IconButton onClick={props.toggleMenu}>
          <Menu></Menu>
        </IconButton>
        <Typography variant="h5" noWrap>
          Menu
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
