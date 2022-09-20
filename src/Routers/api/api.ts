// import express from expresss lib
import express, { Application, Request, Response } from 'express'
// Import path from path lib
import path from 'path'
// import Sharp image processing from sharp lib
import sharp from 'sharp'
// import file System from fs-ex lib
import fileSys from 'fs-extra'
//Import names from file /util
import names from '../util/util'
// create instance of that class Application  and make new express object
const app: Application = express()

// Create index  Router
app.get('/', (req: Request, res: Response) => {
  //---------------------------- making query string------------------------------------------
  const Fname = req.query.imagname as string,
    w = req.query.width as string,
    h = req.query.height as string
  //--------------------------------end Queries------------------------------------------------

  //----------------------{{ Passing thec Query-pic/path (pic/folder)/coverison ti num of picture }}----------------------------
  const PathImg = path.resolve('./' + `img/${Fname}.jpg`)
  const requiredQueryNames = names.includes(Fname) as boolean // we can make new function that accepted heystack,needdle to find what are we looking inside array
  const width: number = parseInt(w),
    height: number = parseInt(h) // converting height and width
  //------------------------------------------------------{{ end passing }}------------------------------------------------

  //-------------------------{{ Objects with errors , Handling errors With if/Switch Case }}-------------------------------
  const errors: { err1: string; err2: string; err3: string; warr: string } = {
    err1: ` <h5 style='  padding: 20px;background-color: #f44336;color: white;margin-bottom: 15px; text-align:center'> Bad request  404  Error in  ! Queries-string : are  not defined! </h5> `,
    err2: ` <h5 style=' padding: 20px;background-color: #f44336;color: white;margin-bottom: 15px; text-align:center '>Sorry ! Query-Name  is empty ! </h5> `,
    err3: ` <h5 style=' padding: 20px;background-color: #f44336;color: white;margin-bottom: 15px; text-align:center '> this ${Fname} does not match  please provide the name as  well  ! </h5> `,
    warr: ` <h5 style=' padding: 20px;background-color: yellow;color: white;margin-bottom: 15px; text-align:center '>    Query-width:${w} and Query-height:${h} is not defiend! </h5> `
  }
  // check if the query-name is not define
  if (Fname == undefined) {
    return res.status(400).send(errors.err1)
  }
  // check if the Query-name is empty
  else if (Fname == '') {
    // we can also add this condition fname.length > 1  it's vaild if there's at least one char
    return res.status(400).send(errors.err2)
  } else if (requiredQueryNames !== true) {
    return res.status(400).send(errors.err3)
  }
  else {
    const pathToFolder = './img/resized',
    OutputSourceFolder = `./img/resized/${Fname}+${width + height}.jpg` // 1: giving path for creating folder  and 2: then give the path of imag that we will resize it
    //-----------------------------------------------{ { End Handling errors With if/Switch Case } }-----------------------------------------------
    
    //----------------------------------------{ { if there's no error found Check from the width/height/name  } }-------------------------------
    if (requiredQueryNames && width && height) {
      
      // create a folder inside image Dir with Promise
      fileSys
        .ensureDir(pathToFolder)
        .then(() => {
          // return succufully message
         return 'this folder  has been created from pervious '
        })
        .catch((err) => {
          // catch  error if there's no parms
          return err
        })
      //check if the image is resized or not / it does exist

      try {
        fileSys.accessSync(OutputSourceFolder)
        return  res.sendFile(path.resolve('./' + OutputSourceFolder))
      } catch (error) {
        res.send(
          `<pre style="color:green;font-weight:bold;text-align:center">This pic it  not does exist ,pleasse refresh to be created ! </pre>`
        )
        //resize the image and give it hieght and width and give and move it to the  output folder
        sharp(`${PathImg}`).resize(width, height).toFile(OutputSourceFolder)
        // go the path folder and show me the picture
        return res.sendFile(path.resolve('./' + OutputSourceFolder))
      }
    }
    //----------------------------------------{ {  end if there's no error found Check from the width/height/name  } }-------------------------------
  }
})

export default app
