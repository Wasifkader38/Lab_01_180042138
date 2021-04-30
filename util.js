const HelloFunc = require('./helloWorld');

//HelloFunc.Hello();

//console.log(HelloFunc.name);

//setInterval
setInterval(() => {
  HelloFunc.Hello();
}, 1000);

setTimeout(() => {
  console.log(HelloFunc.name);
}, 5000);

//local Module
//Global Module
//3rd Party Module/Package---We have to install these modules from Node Package Manager(NPM)

//setInterval- runs as a loop
//setTimeout- runs only once
