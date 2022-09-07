// Async code execution

//1. Callbacks
//2. Promises
//3. async/await

// AD Rotator

// "Callbacks", "Promises", "async/await"

//HW1*: try to do this with a single
//      setInterval + Array

const showAd2 = () => {
  let arr = ["Callbacks", "Promises", "async/await"]
  
  setInterval(() => {

    arr.forEach( element => console.log(element) )
    console.clear()
    
  }, 2000)
}
showAd2()

//1. Callbacks
const showAd = () => {
  console.clear()
  console.log("Callbacks")
  setTimeout(() => {
    console.clear()
    console.log("Promises")
    setTimeout(() => {
      console.clear()
      console.log("async/await")
      setTimeout(() => {
        console.clear()
      }, 2000)
    }, 2000)
  }, 2000)
}
// showAd()
/*
   timer <------- callback1
                    timer <----------callback2
                                       timer <--------callback3 
*/

//2. Promises
let promiseShowAdd1 = new Promise((resolve, reject) => {
  console.clear()
  console.log("Callbacks")
  setTimeout(() => {
    console.clear()
    resolve()
  }, 2000)
})
promiseShowAdd1.then(()=> {
  console.log("Promises")
  return new Promise ((resolve, reject) => {
    setTimeout(()=> {
      console.clear()
      resolve()
    }, 2000)
  })
}).then(()=> {
  console.log("async/await")
})
/*
  const temp = promise
                      .then(...)
                      .then(...)
          ...
          temp
              .then(...)

*/

/* 
promises can be executed in sequence or parallel

------------Promise----------
|                           |
|     decides               |
|         ------ __fres(){} |               nextPromise
|         V   -- __frej(){} |
|         V   V             |           |
|   (resolve,reject) => {   |  .then()  |
|                           |------->   |
|                           |           |
|      custom logic         |
|                           |
|    }                      |
|                           |
-----------------------------

*/