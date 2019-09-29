import React from 'react'

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton
} from '@material-ui/core'
import { Input, Drafts, ChevronLeft } from '@material-ui/icons'

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
      <List>
        <ListItem button>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText>サンプル1</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Input />
          </ListItemIcon>
          <ListItemText>サンプル2</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Menu
