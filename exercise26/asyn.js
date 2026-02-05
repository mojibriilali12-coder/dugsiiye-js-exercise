

// SYNCHONOUS

function fetchData(){
    alert("fetching data")
    return {name:"mohamud", age:25}
}

 console.log("fetching data is starting")

 const data =fetchData()

console.log("data user", data)

 console.log("this is message blocking until user data fetched")





 console.log("BETWEEN BLOCKING & NON BLOCKING")

//  ASYNCHRONOUS

function myData(callback){
    setTimeout(()=>{
      
    const user={name:"mohamud", age:25}

     callback(user)

    }, 2000);
}

 console.log("fetching data")

myData(function(user){
    console.log(user)
})

console.log("hello i am quicker")