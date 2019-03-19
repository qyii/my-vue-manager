import store from '@/store'

/**
 * @description 按钮权限控制
 * @param {*} el
 * @param {*} binding
 */
export const permission = (el, binding) => {
  if (!store.state.permission.acceptBtn.includes(binding.value)) {
    el.style.display = 'none'
  }
}

/**
 * @description 聚焦元素
 * @param {*} el
 */
export const focus = el => {
  if (store.state.permission.acceptBtn) {
    el.focus()
  }
}
