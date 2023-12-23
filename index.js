const express = require('express')
const app = express()

app.post('/', (req, res) => {
  // 在这里可以进行其他处理，
  res.send(req.body);
});

app.get('/', (req, res) => {
  res.send('Welcome');
});

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
