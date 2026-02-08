

const user={
    id:1,
    name:"mohamud",
    city:"Thompson"
};

console.log(user)

// object to JSON

const jsonString= JSON.stringify(user);

console.log(jsonString)

// JSON to object

const parse = JSON.parse(jsonString)

console.log(parse)