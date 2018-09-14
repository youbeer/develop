'use strict';

require("./styles.scss");

const {Elm} = require('./card/Main');
const mountNode = document.getElementById('cards');
const app = Elm.Main.init({flags: 6, node: mountNode});

app.ports.toJs.subscribe(data => {
    console.log(data);
})
// Use ES2015 syntax and let Babel compile it for you
var testFn = (inp) => {
    let a = inp + 1;
    return a;
}
