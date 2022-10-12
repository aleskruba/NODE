const os = require('os')
const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises;

console.log('hello1.... ')

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname,'starter.txt'),'utf8')
    console.log(data);
    
    /*delete - unlink*/
    await fsPromises.unlink(path.join(__dirname,'starter.txt'))

    await fsPromises.writeFile(path.join(__dirname,'promiseWrite.txt'),data)
    await fsPromises.appendFile(path.join(__dirname,'promiseWrite.txt'), '\n\n\ I  appended this text')
    await fsPromises.rename(path.join(__dirname,'promiseWrite.txt'), path.join(__dirname,'NewpromiseWrite.txt'))

    const newdata = await fsPromises.readFile(path.join(__dirname,'NewpromiseWrite.txt'),'utf8')
    console.log(newdata);


  }catch (err) {
      console.log(err);
  }
}

fileOps()

// fs.readFile('starter.txt', 'utf8',(err,data)=> {
//  if (err) throw err;
//  console.log(data)
// })



/*
fs.readFile(path.join(__dirname,'starter.txt'), 'utf8',(err,data)=> {
 if (err) throw err;
 console.log(data)
})
*/


 /*
fs.writeFile(path.join(__dirname,'reply.txt'), 'My text',(err)=> {
 if (err) throw err;
 console.log('Write complete')
   
     fs.appendFile(path.join(__dirname,'reply.txt'), '\n\nMy test text 2',(err)=> {
       if (err) throw err;
       console.log('Append complete')
     })

         fs.rename(path.join(__dirname,'reply.txt'), path.join(__dirname,'newreply.txt'),(err)=> {
           if (err) throw err;
           console.log('Append complete')
         })
})
*/

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))


process.on('uncaughtException', err=>{
  console.error(`There was an error : ${err}`)
  process.exit(1)
})
