const Password = () => import('@/pages/system/password')
const Permit = () => import('@/pages/system/permit')
const Other = () => import('@/pages/system/other')

export default [
  {
    path: '/system/password',
    component: Password,
    name: 'SysPassword',
    meta: { activeMenu: '/system/password' }
  },
  {
    path: '/system/permit',
    component: Permit,
    name: 'SysPermit',
    meta: { activeMenu: '/system/permit' }
  },
  {
    path: '/system/other',
    component: Other,
    name: 'SysOther',
    meta: { activeMenu: '/system/other' }
  }
]
