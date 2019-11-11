import React from 'react'
import { Divider } from '@material-ui/core'
import { ViewColumn, ViewCarousel, Accessibility } from '@material-ui/icons'

import { IconList } from '../molecules/IconList'

export const MenuList: React.FC = () => {
  return (
    <React.Fragment>
      <IconList iconList={[{ Icon: ViewColumn, title: '本棚の管理' }]} />
      <Divider />
      <IconList
        iconList={[
          { Icon: ViewCarousel, title: '本棚1' },
          { Icon: ViewCarousel, title: '本棚2' },
          { Icon: ViewCarousel, title: '本棚3' }
        ]}
      />
      <Divider />
      <IconList iconList={[{ Icon: Accessibility, title: 'アカウント' }]} />
      <Divider />
    </React.Fragment>
  )
}
