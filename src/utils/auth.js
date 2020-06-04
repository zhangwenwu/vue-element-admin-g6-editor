import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  console.log(token)
  return Cookies.set(TokenKey, token, { expires: 360000 })

}

export function removeToken() {
  console.log('删除')
  return Cookies.remove(TokenKey)
}
