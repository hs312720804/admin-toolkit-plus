export function getList (params) {
  return new Promise((resolve, reject) => {
    let data = [
      { name: '测试1', id: 1 },
      { name: '测试2', id: 2 },
      { name: '测试3', id: 3 },
      { name: '测试4', id: 4 },
      { name: '测试5', id: 5 },
      { name: '测试6', id: 6 },
      { name: '测试7', id: 7 },
      { name: '测试8', id: 8 },
      { name: '测试9', id: 9 },
      { name: '测试10', id: 10 }
    ]
    if (params.pageNo > 1) {
      data = data.map(item => {
        return {
          name: item.name + params.pageNo,
          id: item.id + 'a' + params.pageNo
        }
      })
    }
    setTimeout(() => {
      let results = {
        rows: params.label ? data.filter(item => item.name.includes(params.label)) : data,
        total: 40
      }
      resolve(results)
    }, 400)
  })
}
interface p {
  currentPage: number,
  pageSize?: number
}
export function pageFakeData (pagination: p) {
  let data = [
    { name: '测试1', id: '1' },
    { name: '测试2', id: '2' },
    { name: '测试3', id: '3' },
    { name: '测试4', id: '4' },
    { name: '测试5', id: '5' },
    { name: '测试6', id: '6' },
    { name: '测试7', id: '7' },
    { name: '测试8', id: '8' },
    { name: '测试9', id: '9' },
    { name: '测试10', id: '10' }
  ]
  return new Promise((resolve, reject) => {
    if (pagination.currentPage > 1) {
      data = data.map(item => {
        return {
          name: item.name + pagination.currentPage,
          id: item.id + 'a' + pagination.currentPage
        }
      })
    }
    const results = {
      rows: data,
      total: 100
    }
    resolve(results)
  })
}
 
