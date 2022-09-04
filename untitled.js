var kelvin = 293;

//converting kelvin to celsius
var celcius = kelvin - 273;

// converting celsius to fahrenheit
let fahrenheit = celcius * (9/5) + 32;

//In order to round this value DOWN we use math.floor:
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.1`);
