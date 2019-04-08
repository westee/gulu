import Toast from './toast'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (toastData, toastOptions = {}) => {
      if(currentToast){
        currentToast.close()
      }
      // 执行过close函数后，不会重复执行close函数。
      currentToast = creaetToast(Vue, toastData, toastOptions,  ()=>{currentToast = null})
    }
  }
}


function creaetToast(Vue, toastData, toastOptions, onClose) {
  let Construcotr = Vue.extend(Toast)
  let com = new Construcotr({
    propsData: toastOptions
  })
  com.$slots.default = toastData
  com.$mount()
  com.$on('close', onClose)
  document.body.appendChild(com.$el)
  return com
}