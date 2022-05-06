const addId = <T extends object>(obj: T) => {
  // T is a generic type
  const id = Math.random().toString(16).slice(2);
  return {
    ...obj,
    id,
  };
};

interface UserInterface<T, V> {
  name5: string;
  data: T;
  meta: V;
}

const user5: UserInterface<{ meta: string }, string> = {
  name5: "Kaushik",
  data: {
    meta: "T meta",
  },
  meta: "V meta",
};

const user6: UserInterface<string[]> = {
  name5: "Madhura",
  data: ["a", "b", "c"],
};

const result = addId<UserInterface>(user5);
console.log(user5);
console.log(addId(user5));
console.log(user6);
console.log(addId(user6));
