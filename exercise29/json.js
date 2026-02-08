

async function fetchData() {
    
    console.log("Starting Fetching Data!");

    const response =await fetch("data.json")

    const data = await response.json();

    console.log("Ready Data" , data)
}

fetchData()