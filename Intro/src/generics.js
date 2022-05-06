"use strict";
const addId = (object) => {
    const id = Math.floor(Math.random() * 100000000000);
    return Object.assign(Object.assign({}, object), { id });
};
console.log(addId({ name: "Kaushik" }));
