const http = require('http')

const PORT = 8000
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT, '服务器启动成功')