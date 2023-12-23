const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  // 获取查询字符串参数
  const key1 = req.query.key1;
  const key2 = req.query.key2;

  // 在控制台中打印参数
  console.log('key1:', key1);
  console.log('key2:', key2);

  // 在这里可以进行其他处理，例如返回响应给客户端
  res.send('GET request received with key1=' + key1 + ' and key2=' + key2);
});

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
