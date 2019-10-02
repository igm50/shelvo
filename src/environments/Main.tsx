import React, { useState } from 'react'
import { Toolbar } from '@material-ui/core'

import Header from '../containers/ecosystems/Header'
import Menu from '../containers/ecosystems/Menu'
import Contents from '../containers/ecosystems/Contents'

const Main: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const changeMenuOpen = () => setMenuOpen(!menuOpen)

  return (
    <React.Fragment>
      <Header toggleMenu={changeMenuOpen} />
      <Menu isOpen={menuOpen} close={changeMenuOpen} />
      <Toolbar />
      <Contents />
    </React.Fragment>
  )
}

export default Main
