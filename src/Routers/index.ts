//import expresss/ function
import express, { Application, NextFunction, Request, Response } from 'express'
//import file api
import api from './api/api'

// create an instance from express
const app: Application = express()
//send welcome messaage to the server
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  //send welcome  to server
  res.send(`
 <body><h1 style="text-align:center;color:  font-size: 72px;background: -webkit-linear-gradient(#CD104D, #5CB8E4);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">  Welcome to Udacity APi image processing  ! </h1>  </body>
 `)
  res.end()
})

//use this router with file api
app.use('/size', api)

//send messge to server with Router error
app.get('/error-404', (req: Request, res: Response) => {
  res.send(
    ` <h1 style='color:red;text-align:center'> Error 404 </h1> <br><p style='color:red;text-align:center'>Sorry ,Unknown Router Check from the name  as well </p><hr> `
  )
  res.end()
})

//adding middlewear  and redirect to error-router  there's also middleweare can be added (res,req,next)=>{}
app.all('/*', (req: Request, res: Response) => {
//  redirect error router if something is not true
  res.redirect('/error-404')
})

//export this file to be imported
export default app
