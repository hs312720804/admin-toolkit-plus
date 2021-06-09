
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
 
