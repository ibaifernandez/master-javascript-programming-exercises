let obj = {
    person:"Rafael",
    lastName:"Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27,
}

function countNumberOfKeys(obj) {
    let counter = 0;
    for (let property in obj) {
        counter++;
    }   
    return counter
}
console.log(countNumberOfKeys(obj))
