import express from 'express'
import { db } from './database/db_Connection.js'
import userRouter from './src/modules/user/user.routes.js'
import postRouter from './src/modules/posts/post.routes.js'
const app = express()
const port = 3000
app.use(express.json())
app.use("/users",userRouter)
app.use("/posts",postRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))