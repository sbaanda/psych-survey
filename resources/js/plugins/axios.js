class Axios {
  install(Vue, options) {
    Vue.prototype.$axios = options.data
  }
}

export default new Axios()
