const {getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog.js')
const { SuccessModel, ErrorModel } = require('../model/resModel.js')


const handleBlogRouter = (req, res) => {
  const method = req.method
  const id = req.query.id

  // 1.获取博客列表
  if (method === 'GET' && req.path === '/api/blog/list') {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''
    // const listData = getList(author, keyword)
    // return new SuccessModel(listData)
    const result = getList(author, keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
    
  }

  // // 2.获取博客详情
  // if (method === 'GET' && req.path === '/api/blog/detail') {
  //   const id = req.query.id
  //   const data = getDetail(id)
  //   return new SuccessModel(data)
  // }

  // // 3.新建一篇博客
  // if (method === 'POST' && req.path === '/api/blog/new') {
  //   // req.body 为post请求携带的数据
  //   const data = newBlog(req.body)
  //   return new SuccessModel(data)
  // }

  // // 4.更新一篇博客
  // if (method === 'POST' && req.path === '/api/blog/update') {
  //   const result = updateBlog(id, req.body)
  //   if (result) {
  //     return new SuccessModel()
  //   } else {
  //     return new ErrorModel("更新博客失败")
  //   }
  // }

  // // 5.删除一篇博客
  // if (method === 'POST' && req.path === 'api/blog/del') {
  //   const result = delBlog(id)
  //   if (result) {
  //     return new SuccessModel()
  //   } else {
  //     return new ErrorModel("更新博客失败")
  //   }
  // }
}

module.exports = handleBlogRouter