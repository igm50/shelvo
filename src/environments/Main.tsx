import React, { useState } from 'react'

import Header from '../containers/ecosystems/Header'
import Menu from '../containers/ecosystems/Menu'

const Main: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const changeMenuOpen = () => setMenuOpen(!menuOpen)

  return (
    <React.Fragment>
      <Header toggleMenu={changeMenuOpen} />
      <Menu isOpen={menuOpen} close={changeMenuOpen} />
    </React.Fragment>
  )
}

export default Main
