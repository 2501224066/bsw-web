import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PoetryList from '@/components/PoetryList'
import CiList from '@/components/CiList'
import IdiomList from '@/components/IdiomList'
import XiehouyuList from '@/components/XiehouyuList'
import PoetryDetail from '@/components/PoetryDetail'
import CiDetail from '@/components/CiDetail'
import IdiomDetail from '@/components/IdiomDetail'
import WordDetail from '@/components/WordDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/poetry/list',
      name: 'poetryList',
      component: PoetryList
    },
    {
      path: '/ci/list',
      name: 'ciList',
      component: CiList
    },
    {
      path: '/idiom/list',
      name: 'idiomList',
      component: IdiomList
    },
    {
      path: '/xiehouyu/list',
      name: 'xiehouyuList',
      component: XiehouyuList
    },
    {
      path: '/poetry/detail/:id',
      name: 'poetryDetail',
      component: PoetryDetail
    },
    {
      path: '/ci/detail/:id',
      name: 'ciDetail',
      component: CiDetail
    },
    {
      path: '/idiom/detail/:id',
      name: 'idiomDetail',
      component: IdiomDetail
    },
    {
      path: '/word/detail/:word',
      name: 'wordDetail',
      component: WordDetail
    }
  ]
})
