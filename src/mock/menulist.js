export default [
  {
    path: '/system',
    name: 'system',
    component: 'Layout',
    redirect: '/system/permit',
    meta: {
      name: '系统设置',
      icon: 'set'
    },
    children: [
      {
        path: '/sasa',
        name: 'testnew',
        meta: {
          name: '用户相关',
          icon: 'fensi'
        },
        children: [
          {
            path: '/userjak',
            name: 'userjak',
            meta: {
              name: '个人设置',
              icon: 'user'
            },
            children: [
              {
                path: '/system/password',
                component: 'Password',
                name: 'SysPassword',
                meta: { name: '密码设置' }
              }
            ]
          }
        ]
      },
      {
        path: '/system/permit',
        component: 'Permit',
        name: 'SysPermit',
        meta: { name: '权限设置' }
      },
      {
        path: '/system/other',
        component: 'Other',
        name: 'SysOther',
        meta: { name: '其他设置' }
      }
    ]
  }
]
