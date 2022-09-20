import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
// import  * env
import * as dotenv from 'dotenv'
//import router folder
import router from './Routers'

dotenv.config()
// import  env that include the port
const PORT = process.env.PORT || 4000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'), router)

// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.send(`<h1> GET / </h1>`)
})

// start express server
app.listen(PORT, () => {
  return `Server is starting at port:${PORT}`
})

export default app
