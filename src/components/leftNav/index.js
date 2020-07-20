import style from './index.module.css'

const product = {
  iconClass: 'iconfont icondealtIcon0',
  title: '商品',
  path: '/product',
  childList: [
    {
      title: '商品管理',
      list: [
        {
          text: '商品管理',
          path: '/product/detail',
        },
        {
          text: '商品分组',
          path: '/product/grouping'
        },
      ]
    },
    {
      title: '商品属性',
      list: [
        {
          text: '商品规格',
          path: '/product/specs',
        },
        {
          text: '商品属性',
          path: '/product/attribute'
        },
        {
          text: '商品加料',
          path: '/product/setting'
        },
        {
          text: '商品单位',
          path: '/product/unit'
        },

      ]
    },
    {
      title: '商品导入',
      list: [
        {
          text: '批量上传',
          path: '/product/upload',
        }
      ]
    }
  ]
}

const takeout = {
  iconClass: 'iconfont icondealtIcon0',
  title: '外卖',
  path: '/takeout',
  childList: [
    {
      title: '订单概况',
      list: [
        {
          text: '今日概况',
          path: '/takeout/survey'
        },
      ]
    },
    {
      title: '订单管理',
      list: [
        {
          text: '订单处理',
          path: '/takeout/handle'
        },
        {
          text: '订单查询',
          path: '/takeout/find'
        },
        {
          text: '快捷订单',
          path: '/takeout/quick'
        },
      ]
    },
    {
      title: '外卖设置',
      list: [
        {
          text: '订单提醒',
          path: '/takeout/remind'
        },
        {
          text: '订单设置',
          path: '/takeout/setting'
        },
        {
          text: '订单说明',
          path: '/takeout/explain'
        },
      ]
    },
  ]
}

export default {//}}}
  data () {
    return {
      style,
      first: 0,
      last: 0,
      selectIndex: 0,
      childList: [],
      navList: [
        {
          iconClass: 'iconfont icondealtIcon0',
          title: '首页',
          path: '/home',
          childList: []
        },
        product,
        takeout,
      ],
    }
  },

  mounted () {
    this.navList.map((item, j) => {
      const url = location.pathname.includes(item.path)
      if (url) {
        this.selectIndex = j
        this.childList = item.childList
        this.childList.map((bar, index) => {
          bar.list.map((cur, i) => {
            if (cur.path === location.pathname) {
              this.first = index
              this.last = i
            }
          })
        })
      }
    })
  },
  methods: {
    handleClickNav (index) {
      const itemNav = this.navList[index]

      this.selectIndex = index
      this.childList = itemNav.childList

      const path = itemNav.childList.length 
      ? this.childList[0].list[0].path
      : itemNav.path

      this.$router.push(path)
    },

    handleClick1 (first, last) {
      this.first = first
      this.last = last

      this.$router.push(this.childList[first].list[last].path)
    }
  }
}
