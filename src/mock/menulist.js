export default [
  {
    path: '/richtext',
    name: 'richtext',
    component: 'components/layouts',
    meta: {
      name: '富文本',
      icon: 'message'
    },
    children: [
      {
        path: '/richtext/editor',
        name: 'RichEditor',
        component: 'pages/richtext/editor',
        meta: {
          name: '编辑器'
        }
      },
      {
        path: '/richtext/markdown',
        name: 'RichMarkdown',
        component: 'pages/richtext/markdown',
        meta: {
          name: 'markdown'
        }
      }
    ]
  },
  {
    path: '/media',
    name: 'media',
    component: 'components/layouts',
    meta: {
      name: '多媒体',
      icon: 'theme'
    },
    children: [
      {
        path: '/media/picture',
        name: 'MedPicture',
        component: 'pages/media/picture',
        meta: {
          name: '图片'
        }
      },
      {
        path: '/richtext/audio',
        name: 'MedAduio',
        component: 'pages/media/audio',
        meta: {
          name: '音频'
        }
      },
      {
        path: '/richtext/video',
        name: 'MedVideo',
        component: 'pages/media/video',
        meta: {
          name: '视频'
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    component: 'components/layouts',
    redirect: '/system/permit',
    meta: {
      name: '系统设置',
      icon: 'set'
    },
    children: [
      {
        path: '/system/user',
        name: 'testnew',
        component: 'components/postRoutes',
        meta: {
          name: '用户相关',
          icon: 'fensi'
        },
        children: [
          {
            path: '/system/user/personal',
            name: 'userjak',
            component: 'components/postRoutes',
            meta: {
              name: '个人设置',
              icon: 'user'
            },
            children: [
              {
                path: '/system/user/personal/password',
                component: 'pages/system/password',
                name: 'SysPassword',
                meta: { name: '密码设置' }
              }
            ]
          }
        ]
      },
      {
        path: '/system/permit',
        component: 'pages/system/permit',
        name: 'SysPermit',
        meta: { name: '权限设置' }
      },
      {
        path: '/system/permit/:id',
        component: 'pages/system/editPermit',
        name: 'SysPermitEdit',
        meta: { name: '编辑权限', activeMenu: '/system/permit' }
      },
      {
        path: '/system/other',
        component: 'pages/system/other',
        name: 'SysOther',
        meta: { name: '其他设置' }
      }
    ]
  }
]
