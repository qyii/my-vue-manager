import Layout from '@/components/layouts'
const Password = () => import('@/pages/system/password')
const Permit = () => import('@/pages/system/permit')
const Other = () => import('@/pages/system/other')

export default {
  path: '/system',
  name: 'system',
  component: Layout,
  redirect: '/system/permit',
  meta: {
    name: '系统设置',
    icon: 'set'
  },
  children: [
    {
      path: 'password',
      component: Password,
      name: 'SysPassword',
      meta: { activeMenu: '/system/password', name: '密码设置' }
    },
    {
      path: 'permit',
      component: Permit,
      name: 'SysPermit',
      meta: { activeMenu: '/system/permit', name: '权限设置' }
    },
    {
      path: 'other',
      component: Other,
      name: 'SysOther',
      meta: { activeMenu: '/system/other', name: '其他设置' }
    }
  ]
}
