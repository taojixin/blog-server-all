const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  if (author) {
    sql += `and author='${author}'`
  }
  if (keyword) {
    sql += `and title like '%${keyword}%'`
  }
  sql += `order by createtime desc;`

  // 返回 promise
  return exec(sql)
}

const getDetail = (id) => {
  return [
    {
      id: 1,
      title: '标题a',
      content: '内容1',
      createTime: 1546610491112,
      author: 'zhangsan'
    },
  ]
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包括title content等
  return {
    id: 3 // 表示新建成功，返回保存的blog在数据库中的id
  }
}

const updateBlog = (id, blogData = {}) => {
  // id 就是更新博客的id
  // blogData是一个博客对象， 包括title content等
  console.log(id, blogData);
  return true
}

const delBlog = (id) => {
  // id 为要删除的id
  return true

}


module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}