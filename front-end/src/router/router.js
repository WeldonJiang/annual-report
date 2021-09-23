import Vue from 'vue'
import Router from 'vue-router'
import AnnualReport from '@/components/annualReport'
import Menu from '@/components/menu'

// 安装路由
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Menu',
            component: Menu
        }, {
            path: '/AnnualReport',
            name: 'AnnualReport',
            component: AnnualReport
        }
    ]
})