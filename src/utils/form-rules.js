export const REQUIRED_RULES = [{ required: true, message: '这是必填项', trigger: 'blur', pattern: /^.*$/ }]
export const USERNAME_RULES = [{ required: true, message: '请输入用户名', trigger: 'blur' }]
export const PASSWORD_RULES = [{ required: true, message: '请输入密码', trigger: 'blur' }]
export const IMAGE_CODE_RULES = [{ required: true, message: '请输入验证码', trigger: 'blur' }]
export const PHONE_RULES = [
  { required: true, message: '请输入手机号', trigger: 'blur' },
  { pattern: /^1[0-9]{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
]
export const EMAIL_RULES = [
  { required: true, message: '请输入邮箱', trigger: 'blur' },
  { type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }
]
export const POSITIVE_INTEGER_RULES = [
  { required: true, message: '请输入正整数', trigger: 'blur', pattern: /^[1-9]*[1-9][0-9]*$/ },
  { pattern: /^[1-9]*[1-9][0-9]*$/, message: '请输入正确的正整数', trigger: 'blur' }
]
export const HUNDRED_NUMBER_RULES = [
  { required: true, message: '请输入一百以内的数字', trigger: 'blur', pattern: /^((\d|[123456789]\d)(\.\d+)?|100)$/ },
  { pattern: /^((\d|[123456789]\d)(\.\d+)?|100)$/, message: '请输入正确的一百以内的数字', trigger: 'blur' }
]
export const POSITIVE_NUMBER_RULES = [
  { required: true, message: '请输入自然数', trigger: 'blur', pattern: /^[1-9]\d*$/ },
  { pattern: /^[1-9]\d*$/, message: '请输入正确的自然数', trigger: 'blur' }
]
export const OR_POSITIVE_NUMBER_RULES = [
  { message: '请输入自然数', trigger: 'blur', pattern: /^[1-9]\d*$/ },
  { pattern: /^[1-9]\d*$/, message: '请输入正确的自然数', trigger: 'blur' }
]
export const POSITIVE_RULES = [
  { required: true, message: '请输入非负数', trigger: 'blur', pattern: /^\d+(\.\d+)?$/ },
  { pattern: /^\d+(\.\d+)?$/, message: '请输入正确的非负数', trigger: 'blur' }
]

export const DATE_RULES = [
  { required: true, message: '请选择时间', trigger: 'change,blur', type: 'array' }
]

export const POSITIVE_INT_RULES = [
  { required: true, message: '请输入非负整数', trigger: 'blur', pattern: /^(0|[1-9]\d*)$/ },
  { pattern: /^(0|[1-9]\d*)$/, message: '请输入非负整数', trigger: 'blur' }
]

export const LEGAL_URL = [
  { required: true, message: '请输入正确的URL', trigger: 'blur', pattern: /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/ },
  { pattern: /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/, message: '请输入正确的URL', trigger: 'blur' }
]

export const URL_RULRS = [
  { message: '请输入正确的URL', trigger: 'blur', pattern: /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/ },
  { pattern: /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/, message: '请输入正确的URL', trigger: 'blur' }
]

export const NUM_LETTER_RULES = [
  { required: true, message: '只允许输入数字和英文字母', trigger: 'blur', pattern: /^[0-9a-zA-Z]+$/ }
]
