const Password = () => import('@/pages/system/password')
const Permit = () => import('@/pages/system/permit')
const Other = () => import('@/pages/system/other')

export default [
  {
    path: '/system/password',
    component: Password,
    name: 'SysPassword',
    meta: { activeMenu: '/system/password', name: '密码设置' }
  },
  {
    path: '/system/permit',
    component: Permit,
    name: 'SysPermit',
    meta: { activeMenu: '/system/permit', name: '权限设置' }
  },
  {
    path: '/system/other',
    component: Other,
    name: 'SysOther',
    meta: { activeMenu: '/system/other', name: '其他设置' }
  }
]
