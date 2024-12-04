const obj = { name: "John", age: 30, city: "New York" };
const replacer = (key, value) => (key === 'age' ? undefined : value);
const myJSON = JSON.stringify(obj, replacer);
console.log(myJSON);
