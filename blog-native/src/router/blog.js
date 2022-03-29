const handleBlogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  // 1.获取博客列表
  if (method === 'GET' && path === '/api/blog/list') {
    return {
      msg: '这是获取博客列表的接口'
    }
  }

  // 2.获取博客详情
  if (method === 'GET' && path === '/api/blog/detail') {
    return  {
      mst: '这是获取博客详情的接口'
    }
  }

  // 3.新建一篇博客
  if (method === 'POST' && path === '/api/blog/new') {
    return {
      msg: '这是新建博客的接口'
    }
  }

  // 4.更新一篇博客
  if (method === 'POST' && path === '/api/blog/update') {
    return {
      msg: '这是更新博客的接口'
    }
  }

  // 5.删除一篇博客
  if (method === 'POST' && path === 'api/blog/del') {
    return {
      msg: '这是删除博客的接口'
    }
  }
}

module.exports = handleBlogRouter