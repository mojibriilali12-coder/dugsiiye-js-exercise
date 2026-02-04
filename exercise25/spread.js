

//SPREAD OPERATORS

console.log("SPREAD OPERATOR")

const numbers=[1,2,3];

const allNumbers=[...numbers,4,5,6]

console.log(allNumbers)


console.log("REST OPERATOR")

//REST OPERATORS

function wadar(...tirooyin){
    return tirooyin.reduce((wadarGuud, tiro)=> wadarGuud * tiro, 1)
}

console.log(wadar(2,3,4))