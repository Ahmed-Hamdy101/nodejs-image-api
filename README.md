![alt text](https://cdn.freebiesupply.com/logos/large/2x/udacity-2-logo-png-transparent.png)
# Welcome to Udacity Image Api Processing

#####  **Udacity** Image api Processing is back-end application that allows you to resize  the  picture by providing the `name` of the image  and the `width` and `height`

 #### How to use this Repo : 
-  **Run** ` npm install `
-  **Run** ` npm run start `
  #### Resources:
-  ##### [Sharp](https://sharp.pixelplumbing.com/api-resize)
-  ##### [fs-extra](https://www.npmjs.com/package/fs-extra/)
-  ##### [Node js -> filexistSysnc](https://nodejs.org/api/fs.html#fsexistssyncpath)
-  ##### [Node js -> process.cwd]([https://nodejs.org/api/fs.html#fsexistssyncpath](https://nodejs.org/api/process.html#processcwd))
 #### endpoint1:
 |              endpoint2                   |         Description              |
 |                 ---                      |            ---                   |
 | size/?filename=fjord&width=200&height=600| set filename and width and height|
 #### response:
 ```json
 {
 status:200
 message:"success"
 }
 ```
 
  #### endpoint2:
 |              endpoin3                     |         Description               |
 |                                           |                                   |
 |       size/?filename= &width= &height=""  | missing query-paramaters-value    |
 |                                           |                                   |
 size/?filename=fjord123&width=200&height=600|   invalid name check from name    |
 |                                           |                                   |
 |size/?filename=fjord&width=200&height=a    |invalid inputs for height and width|
 
 #### response:
 ```json
 {
 status:404
 message:"error"
 }
