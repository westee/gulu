import Toast from './toast'
export default{
  install(Vue, options){
    Vue.prototype.$toast = (data)=>{
      let Construcotr = Vue.extend(Toast)
      let com = new Construcotr()
      com.$slots.default = data
      com.$mount()
      document.body.appendChild(com.$el)
    }
  }
}