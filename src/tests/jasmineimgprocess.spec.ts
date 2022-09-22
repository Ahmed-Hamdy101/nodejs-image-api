import path from 'path';
import supertest from 'supertest'
import app from '..';
import imageprocessing from "../Routers/app/sharp";

const req = supertest(app);

describe('Testing endpoints image-api', () => {

  it('testing  image-processing-api  with filename fjord  and 900  X 1200 and width   return 200 ', async () => {
     const pathToFolder = './img/resized',OutputSourceFolder:string = path.join(process.cwd() +`img/resized/fjord+${ 900 + 1200}.jpg`) 
     expect(async () => {
       await imageprocessing(pathToFolder,600,1200,OutputSourceFolder)
   }).not.toThrow();
    return 
  })


  it("test value of  height and width with min number  it should be greater than 10", async () => {
    const response = await req.get('/size?filename=steve1.jpg&width=0&height=0 ')
    expect(response.status).toBe(400)
  })

  it("testing  H & W with string return error w and h are integer ", async () => {
    const response = await req.get('/size?filename=none &width=0 &height=y ')
    expect(response.status).toBe(400)
  })


})