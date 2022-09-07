//Promises

// fetch('http://ip-api.com/json/point.md')
//   .then((data) => {
//     return data.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })

  //Simplificat
  // fetch('http://ip-api.com/json/point.md')
  //     .then( data => data.json() )
  //     .then( data => console.log(data) )

// async/await

const getIpData = async () => {
  let data = await fetch('http://ip-api.com/json/point.md')
      data = await data.json()
      console.log(data)  
}
getIpData()