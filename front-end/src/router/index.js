import Vue from 'vue'
import Router from 'vue-router'
import AnnualReport from '@/components/annualReport'
import Index from '@/components/index'

// 安装路由
Vue.use(Router)

export default new Router({
routes: [
　　{
　　　　path: '/',
　　　　name: 'AnnualReport',
　　　　component: AnnualReport
　　}, {
　　　　path: '/index',
　　　　name: 'Index',
　　　　component: Index
　　　　}
　　 ]
})