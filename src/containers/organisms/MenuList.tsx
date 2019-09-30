import React from 'react'

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core'
import { Input, Drafts, ViewColumn } from '@material-ui/icons'

const MenuList: React.FC = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default MenuList
