const Password = r => require.ensure([], () => r(require('@/pages/system/password.vue')), 'password')
const Permit = r => require.ensure([], () => r(require('@/pages/system/permit.vue')), 'permit')
const Other = r => require.ensure([], () => r(require('@/pages/system/other.vue')), 'other')

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
