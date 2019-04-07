import Toast from './toast'
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (data, toastOptions = {}) => {
      let Construcotr = Vue.extend(Toast)
      console.log(toastOptions)
      let com = new Construcotr({
        propsData: toastOptions
      })
      com.$slots.default = data
      com.$mount()
      document.body.appendChild(com.$el)
    }
  }
}