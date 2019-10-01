import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

interface Props {
  iconList: {
    Icon: (props: SvgIconProps) => JSX.Element
    title: string
  }[]
}

const MenuList: React.FC<Props> = props => {
  return (
    <List>
      {props.iconList.map((iconSet, index) => (
        <ListItem button key={index}>
          <ListItemIcon>
            <iconSet.Icon />
          </ListItemIcon>
          <ListItemText>{iconSet.title}</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default MenuList
