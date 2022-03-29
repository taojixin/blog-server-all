const handleBlogRouter = require('./src/router/blog.js')
const handleUserRouter = require('./src/router/user.js')

const serverHandle = (req, res) => {
  // 设置返回和格式 JSON
  res.setHeader('Content-type', 'application/json')

  // 处理 blog路由
  const blogData = handleBlogRouter(req, res)
  if (blogData) {
    res.end(JSON.stringify(blogData))
    return
  }

  // 处理 user路由
  const userData = handleUserRouter(req, res)
  if (userData) {
    res.end(JSON.stringify(userData))
    return
  }

  // 未命中路由， 返回 404
  res.writeHead(404, {"Content-type": "text/plain"})
  res.write("404 Not Found\n")
  res.end()

}

module.exports = serverHandle


// const resData = {
//   name: 'tjx',
//   site: 'dfsj',
//   env: process.env.NODE_ENV
// }

// res.end(JSON.stringify(resData))