const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('��ӭʹ��΢�����йܣ�');
}) 

const port = process.env.PORT || 80
app.listen(port, () => {
    console.log('���������ɹ����˿ڣ�', port)
})