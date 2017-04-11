const express = require("express")
const ejs = require("ejs")
const path = require('path')
const bodyParser = require("body-parser")
const logger = require("morgan")
const cookieParser = require("cookie-parser")

var app = express()

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "ejs")

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index', {})
})

app.get('/repo', (req, res) => {
    res.render('repo', {})
})

app.get('/login', (req, res) => {
    res.render('login', {})
})

app.get('/signup', (req, res) => {
    res.render('signup', {})
})

app.listen(8080, () => {
    console.log("Meme magic on port 8080")
})