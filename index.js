const app = require('express')()
const bodyParser = require('body-parser')
const port = 2000

app.use(bodyParser.json())
app.get('/', (req,res)=>{
    res.send('<h1>Selamat datang di API</h1> ')
})

app.use('/movie', require('./router/movieRouter'))
app.use('/categories', require('./router/categoryRouter'))
app.use('/movcat', require('./router/movcatRouter'))


app.listen(port , ()=>console.log('Server berjalan di port '+port))