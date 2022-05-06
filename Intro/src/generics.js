"use strict";
const addId = (obj) => {
    // T is a generic type
    const id = Math.random().toString(16).slice(2);
    return Object.assign(Object.assign({}, obj), { id });
};
const user5 = {
    name5: "Kaushik",
    data: {
        meta: "some meta",
    },
};
const user6 = {
    name5: "Madhura",
    data: ["a", "b", "c"],
};
const result = addId(user5);
console.log(user5);
console.log(addId(user5));
console.log(user6);
console.log(addId(user6));
