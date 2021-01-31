import Vue from 'vue'
import SvgIcon from '@/components/Icon.vue'

//自动加载svg目录中的svg文件
const req = require.context('./svg',false,/\.svg$/)

console.log(req.keys())
req.keys().map(req)

//全局注册组件
Vue.component('svg-icon',SvgIcon)