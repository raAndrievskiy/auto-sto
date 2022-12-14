require('dotenv').config()
import {ConnectionOptions} from "tls";

const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

const routerAdmin = require('./admin.route')
const routerPosts = require('./post/routes/post.route')

app.use(bodyParser.json())
app.use(cors())

app.use('/uploads', express.static('uploads'))

app.use('/admin', routerAdmin)
app.use('/posts', routerPosts)

const run = async () => {
    await mongoose.connect('mongodb://localhost:27017/auto', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectionOptions)

    app.listen(process.env.PORT, () => console.log(`server started on port - ${process.env.PORT}`))

}
module.exports = run;

