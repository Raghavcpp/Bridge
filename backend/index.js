const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const postRouter = require('./routes/post')
const commentRouter = require('./routes/comment')
const uploadRouter = require('./controllers/uploadController')
require('dotenv').config({ path: './.env'});
const app = express()


console.log('MongoDB URL:', process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('db connection is a success');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


app.use('/images', express.static('assets/images'))

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)
app.use('/upload', uploadRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server has been connected successfully on port ${process.env.PORT}`);
  });