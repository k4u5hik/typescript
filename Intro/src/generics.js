"use strict";
const addId = (object) => {
    const id = Math.random().toString(16).slice(2);
    return Object.assign(Object.assign({}, object), { id });
};
console.log(addId({ name: "Kaushik" }));
