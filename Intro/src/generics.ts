const addId = <T>(object: T) => {
  const id = Math.random().toString(16).slice(2);
  return {
    ...object,
    id,
  };
};

console.log(addId({ name: "Kaushik" }));
