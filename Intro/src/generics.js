"use strict";
const addId = (obj) => {
    // T is a generic type
    const id = Math.random().toString(16).slice(2);
    return Object.assign(Object.assign({}, obj), { id });
};
const user5 = {
    name5: "Kaushik",
};
const result = addId(user5);
console.log(addId(user5));
