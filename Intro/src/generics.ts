const addId = (object) => {
  const id = Math.floor(Math.random() * 100000000000);
  return {
    ...object,
    id,
  };
};

console.log(addId({ name: "Kaushik" }));
