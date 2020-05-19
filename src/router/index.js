import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import PoetryList from '@/components/poetry/list'
import CiList from '@/components/ci/list'
import IdiomList from '@/components/idiom/list'
import XiehouyuList from '@/components/xiehouyu/list'
import PoetryDetail from '@/components/poetry/detail'
import CiDetail from '@/components/ci/detail'
import IdiomDetail from '@/components/idiom/detail'
import WordDetail from '@/components/word/detail'

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
