const addId = <T extends object>(obj: T) => {
  // T is a generic type
  const id = Math.random().toString(16).slice(2);
  return {
    ...obj,
    id,
  };
};

interface UserInterface {
  name5: string;
}

const user5: UserInterface = {
  name5: "Kaushik",
};

const result = addId<UserInterface>(user5);
console.log(addId(user5));
