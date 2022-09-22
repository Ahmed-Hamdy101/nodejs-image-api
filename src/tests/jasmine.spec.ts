import supertest from 'supertest'
import app from '../index'
// create a request object
const request = supertest(app)

describe('Testing endpoints response', () => {
  it('test hello world endpoint', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })

  it("test Routers if it's wrong   with endpoint", async () => {
    const response = await request.get('/sizes')
    expect(response.status).toBe(302)
  })
  it("test Query-paramaters (name | width | height ) if it's not required with endpoint", async () => {
    const response = await request.get('/size')
    expect(response.status).toBe(400)
  })

  it("test all  Query-paramaters if it's  empty with ", async () => {
    const response = await request.get('/size?imagname= &width= &height= ')
    expect(response.status).toBe(400)
  })

  it("test Query-name  if it's  without required names return error code", async () => {
    const response = await request.get('/size?imagname=InvalidName')
    expect(response.status).toBe(400)
  })

  
})
