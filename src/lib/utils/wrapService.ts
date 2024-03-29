import { ElNotification } from 'element-plus'
function wrapService (service) {
  const $service = {
    service
  }
  Object.keys(service).forEach((key) => {
    if (typeof service[key] === 'function') {
      $service[key] = async (args, message) => {
        return service[key](args)
          .then((result) => {
            if (message) {
              ElNotification({
                title: '操作成功',
                type: 'success',
                message
              })
            }
            return result
          })
          .catch((error) => {
            ElNotification({
              title: '操作失败',
              type: 'error',
              message: error.message
            })
            return Promise.reject(error)
          })
      }
    } else {
      $service[key] = service[key]
    }
  })
  return $service
}

export default wrapService
