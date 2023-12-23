const express = require('express')
const app = express()

app.post('/', (req, res) => {
  // 在这里可以进行其他处理，例如返回响应给客户端
  res.send('GET request received with key1=' + ' and key2=');
});

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
