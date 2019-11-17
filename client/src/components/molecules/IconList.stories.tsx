import React from 'react'
import { ViewColumn, ViewCarousel } from '@material-ui/icons'

import { IconList } from './IconList'

export default {
  title: 'Molecules/IconList'
}

export const Sample = () => {
  const iconList = [
    { Icon: ViewColumn, title: '本棚の管理' },
    { Icon: ViewCarousel, title: '本棚1' },
    { Icon: ViewCarousel, title: '本棚2' },
    { Icon: ViewCarousel, title: '本棚3' }
  ]
  return <IconList iconList={iconList} />
}
