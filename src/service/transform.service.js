export class TransformService{
   static fbObjectToArray(fbData){
      // возвращаем массив постов 
      return Object.keys(fbData).map(key => {
         const item = fbData[key]
         item.id = key
         return item
      })
   }
}