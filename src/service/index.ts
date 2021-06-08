// export function getList (params) {
//   return new Promise((resolve, reject) => {
//     let data = [
//       { name: '测试1', id: 1 },
//       { name: '测试2', id: 2 },
//       { name: '测试3', id: 3 },
//       { name: '测试4', id: 4 },
//       { name: '测试5', id: 5 },
//       { name: '测试6', id: 6 },
//       { name: '测试7', id: 7 },
//       { name: '测试8', id: 8 },
//       { name: '测试9', id: 9 },
//       { name: '测试10', id: 10 }
//     ]
//     if (params.pageNo > 1) {
//       data = data.map(item => {
//         return {
//           name: item.name + params.pageNo,
//           id: item.id + 'a' + params.pageNo
//         }
//       })
//     }
//     setTimeout(() => {
//       let results = {
//         rows: params.label ? data.filter(item => item.name.includes(params.label)) : data,
//         total: 40
//       }
//       resolve(results)
//     }, 400)
//   })
// }
const initData = ["Alabama", "Alaska", "Arizona",
"Arkansas", "California", "Colorado",
"Connecticut", "Delaware", "Florida",
"Georgia", "Hawaii", "Idaho", "Illinois",
"Indiana", "Iowa", "Kansas", "Kentucky",
"Louisiana", "Maine", "Maryland",
"Massachusetts", "Michigan", "Minnesota",
"Mississippi", "Missouri", "Montana",
"Nebraska", "Nevada", "New Hampshire",
"New Jersey", "New Mexico", "New York",
"North Carolina", "North Dakota", "Ohio",
"Oklahoma", "Oregon", "Pennsylvania",
"Rhode Island", "South Carolina",
"South Dakota", "Tennessee", "Texas",
"Utah", "Vermont", "Virginia",
"Washington", "West Virginia", "Wisconsin",
"Wyoming"
]
const list = initData.map(item => {
  return { value: `value:${item}`, label: `label:${item}` };
});
/**
 * pagination 为分页信息，filters 过滤字段
 */
export function getLazyRemoteData (pagination: p, filters: string) {
  const data = filters !== '' ? (list.filter((e) => {
    return e.label.indexOf(filters) > -1
  })) : list
  return new Promise((resolve, reject) => {
    const result = data.slice((pagination.currentPage - 1) * pagination.pageSize, pagination.currentPage * pagination.pageSize)
    resolve({
      rows: result,
      total: data.length
    })
  })
}
interface p {
  currentPage: number,
  pageSize: number,
  total: number
}
export function pageFakeData (pagination: p) {
  return new Promise((resolve, reject) => {
    let data = []
    const total = 100
    const pageSize = pagination.pageSize
    const currentPage = pagination.currentPage 
    const count = pageSize * currentPage 
    const n = count > total ? count - total : pageSize
    for (let i =0 ;i < n; i++) {
      data.push({
        name: '第' + (currentPage) + '页，每页显示' + pageSize + ',当前页第' + (i+1) + '条数据',
        id: i
      })
    }
    const results = {
      rows: data,
      total
    }
    resolve(results)
  })
}
 
