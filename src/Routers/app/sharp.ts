import sharp from  "sharp"

async function  resize(path:string,width:number,height:number,output:string) {
     
return  sharp(path).resize(width,height).toFile(output)

}

export  default resize; 