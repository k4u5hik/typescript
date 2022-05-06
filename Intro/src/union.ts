type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

interface UInt {
  id: ID;
  name: string;
  age: number;
}

const popularTag: PopularTag[] = ["JavaScript", "TypeScript", "React", "Vue"];

const dragonsTag: MaybePopularTag = "dragon";

let username: string | number = "Axel";
username = 123;
username = "Axel";

let errorMessage: string | null = null;

let user3: UInt | null = null;
