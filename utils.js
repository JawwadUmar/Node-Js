
const generateRandomNumbers = () =>{
    return Math.floor(Math.random()*100) + 1;
}


const degreeToFahrenheit = (degree) =>{

    return 9/5 *degree + 32;
}

module.exports = {generateRandomNumbers, degreeToFahrenheit};