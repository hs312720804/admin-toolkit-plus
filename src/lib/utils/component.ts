import { h } from 'vue'
import { ElButton } from 'element-plus'
export function createOperationRender (component: any, actions: [], elName: string) {
  return function render (params) {
    return Object.keys(actions).map((key: string | number ) => {
      return h(
        ElButton || elName,
        {
          type: 'text',
         
          'onClick': () => {
            component[key](params)
          }
        }, actions[key]
        
      )
    })
  }
}

export default { createOperationRender }
