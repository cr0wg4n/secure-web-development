import express from 'express'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()

app.use(express.json())
app.use(express.static('../static'))

app.use(function (req, res, next) {
    res.setHeader(
        'Content-Security-Policy',
        `default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'`
    );
    next();
});

app.get('/',(request, response)=>{
    response.sendFile(join(__dirname,'../','static/index.html'))
})

app.listen(8080, ()=>{
    console.log('starting at localhost:8080')
})

// app.use(express.static())