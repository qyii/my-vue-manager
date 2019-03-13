import * as options from '@/constants/options'
import * as Moment from 'moment'

export function optionLabel (value, optionKey) {
  for (const item of options[optionKey]) {
    if (item.value === value) {
      return item.label
    }
  }
  return ''
}

// 时间显示参照 http://momentjs.cn/docs/#/displaying/
export function moment (value, timeType) {
  return Moment(value).locale('zh-cn').format(timeType)
}
