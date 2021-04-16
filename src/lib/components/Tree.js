/**
 * @author William
 * @date 2018/11/06
 *
 * 把一个 tree 的数据转成一个列表数据
 */
export default function createTreeComponent (component) {
  return {
    data () {
      return {
        list: null
      }
    },
    props: ['tree'],
    methods: {
      parse (tree) {
        // parse tree to list
      },
      setList () {

      }
    },
    render (h) {
      return h('div', this.list.map(({ isShow, level, node }) => {
        return h(Component, {
          props: {
            isShow: isShow,
            level: level,
            node: node
          }
        })
      }))
    }
  }
}
