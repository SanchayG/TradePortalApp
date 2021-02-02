import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Inbox',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
    
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Theme']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Maker Screen',
    //to: '/theme/colors',
    
    to :'/MakerChecker/Maker',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Checker Screen',
    //to: '/theme/typography',
    to :'/MakerChecker/Checker',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Reports',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  
  
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
