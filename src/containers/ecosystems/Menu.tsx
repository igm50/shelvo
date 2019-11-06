import React from 'react'
import { Drawer, Divider, IconButton } from '@material-ui/core'
import { ChevronLeft } from '@material-ui/icons'

import MenuList from '../../components/organisms/MenuList'

interface Props {
  isOpen: boolean
  close: () => void
}

const Menu: React.FC<Props> = props => {
  return (
    <Drawer open={props.isOpen} onClose={props.close}>
      <div style={{ textAlign: 'right' }}>
        <IconButton onClick={props.close}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <MenuList />
    </Drawer>
  )
}

export default Menu
