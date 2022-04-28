import express from 'express'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()

app.use(express.json())
app.use(express.static(join(__dirname,'../static/assets')))

app.use(function (req, res, next) {
    res.setHeader(
        'Content-Security-Policy',
        `default-src 'self'; font-src 'self' https://fonts.gstatic.com; img-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; frame-src 'self'`
    );
    next();
});

app.get('/',(request, response)=>{
    response.sendFile(join(__dirname,'../','static/index.html'))
})

app.listen(8080, ()=>{
    console.log('starting GOOD at http://localhost:8080')
})

// app.use(express.static())