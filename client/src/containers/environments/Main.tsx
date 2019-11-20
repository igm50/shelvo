import React, { useState } from 'react'
import { Toolbar } from '@material-ui/core'

import { Header } from '../ecosystems/Header'
import { Menu } from '../ecosystems/Menu'
import { Contents } from '../ecosystems/Contents'
import { Dialogs } from '../ecosystems/Dialogs'

export const Main: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dialogsOpen, setDialogsOpen] = useState(false)
  const changeMenuOpen = () => setMenuOpen(!menuOpen)

  return (
    <React.Fragment>
      <Header toggleMenu={changeMenuOpen} />
      <Menu isOpen={menuOpen} close={changeMenuOpen} />
      <Toolbar />
      <Contents openBookRegistrator={() => setDialogsOpen(true)} />
      <Dialogs open={dialogsOpen} close={() => setDialogsOpen(false)} />
    </React.Fragment>
  )
}
