//import sharp lib
import sharp from  "sharp"
// create async function to resize the following
async function  resize(path:string,width:number,height:number,output:string) {
// send the output after resize      
return  sharp(path).resize(width,height).toFile(output)

}

export  default resize; 
