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
import { Input, Drafts, ChevronLeft, ViewColumn } from '@material-ui/icons'

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
            <ViewColumn />
          </ListItemIcon>
          <ListItemText>本棚の管理</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText>本棚1</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText>本棚2</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Drafts />
          </ListItemIcon>
          <ListItemText>本棚3</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <Input />
          </ListItemIcon>
          <ListItemText>アカウント</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Menu
