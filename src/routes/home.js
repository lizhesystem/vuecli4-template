/**
 * @description 首页
 */

/* Layout */
const Layout = () => import('@/views/Layout/Layout')

// 首页
const Home = () => import('@/views/Home/home')
const ArticleList = () => import('@/views/Article/ArticleList') // 资讯列表
const ArticleDetail = () => import('@/views/Article/ArticleDetail')// 资讯详情

export default [
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: 'articlelist',
        name: 'articlelist',
        component: ArticleList,
        meta: {
          title: '文章列表'
        }
      },
      {
        path: 'article/:id(\\d+)',
        name: 'article',
        component: ArticleDetail,
        meta: {
          title: '详情'
        }
}
    ]
  }
]
