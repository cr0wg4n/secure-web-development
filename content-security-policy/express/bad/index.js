import express from 'express'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()

app.use(express.json())
app.use(express.static(join(__dirname,'../static/assets')))

app.get('/',(request, response)=>{
    response.sendFile(join(__dirname,'../','static/index.html'))
})

app.listen(8080, ()=>{
    console.log('starting BAD at http://localhost:8080')
})
