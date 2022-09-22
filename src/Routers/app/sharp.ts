import sharp from  "sharp"
 const  imageprocessing =  (path:string,width:number,height:number,output:string)=>{
 return  sharp(path).resize(width,height).toFile(output);
}
export default imageprocessing;
