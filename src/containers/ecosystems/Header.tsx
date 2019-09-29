import React from 'react'

import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'

const Header: React.FC = () => {
  return (
    <AppBar color="inherit">
      <Toolbar>
        <IconButton>
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
