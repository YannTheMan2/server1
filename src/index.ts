import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors());

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/ping', async (req, res) => {
    const url = req.query.url?.toString()
    if (!url) {
        res.send('You need to pass a url');
        return 
    }

    const response = await fetch(url);
    res.send(response.ok) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)  
})
