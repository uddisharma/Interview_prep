"use strict";
const a = 10;
//<-------------------------------------------------------------->
const func = (name) => {
    console.log(name);
};
func("deepak");
const sum = (a, b) => a + b;
console.log(sum(1, 2));
//<-------------------------------------------------------------->
const func2 = (fun) => {
    setTimeout(() => {
        fun("deepak");
    }, 1000);
};
const fun = (msg) => {
    console.log(msg);
};
func2(fun);
