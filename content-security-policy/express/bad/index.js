import express from 'express'

const app = express()

app.use(express.json())


app.listen(8080, ()=>{
    console.log('starting at localhost:8080')
})


// app.use(express.static())