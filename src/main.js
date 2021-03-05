import Vue from 'vue'
import App from './App.vue'
import '@/common/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'

Vue.use(ElementUI.Button)
Vue.use(ElementUI.ButtonGroup)
Vue.use(ElementUI.Input)
Vue.use(ElementUI.Carousel)
Vue.use(ElementUI.CarouselItem)
Vue.use(ElementUI.Link)

Vue.config.productionTip = false

new Vue({ router, store, render: h => h(App) }).$mount('#app')
