

function fetchData(){
    return new Promise((allow,reject)=>{
        setTimeout(() => {
            const welcom=true

            if(welcom){
                allow({id:1, name:"ali"})
            }else{
               reject("failed to fetch data")
            }
        }, 2000);
    })
}


fetchData()

.then((data)=>console.log("user data", data))

.catch((err)=> console.log(err))