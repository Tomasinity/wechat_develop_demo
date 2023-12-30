const express = require('express')
const app = express()

app.post('/', (req, res) => {
  // 在这里可以进行其他处理，
  res.send('Welcome_post '+req.body);
});

app.get('/', (req, res) => {
  res.send('Welcome_get'+req.body);
});

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
