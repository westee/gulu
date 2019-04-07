import Toast from './toast'
export default{
  install(Vue, options){
    Vue.prototype.$toast = (data, toastOptions = {})=>{
      let Construcotr = Vue.extend(Toast)

      let com = new Construcotr({
        propsData:{
          closeButton: toastOptions
        }
      })
      com.$slots.default = data
      com.$mount()
      document.body.appendChild(com.$el)
    }
  }
}