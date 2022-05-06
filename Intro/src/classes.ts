class User {
  private firstName: string;
  private lastName: string;
  readonly unchangeableString: string = "unchangeable";
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangeableString = firstName + " " + "The Unchangeable";
  }

  changeUnchangeableString(): void {
    // this.unchangeableString = "Changed"; // This is not allowed . Cannot assign to 'unchangeableString' because it is a read-only property.ts(2540)
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const user = new User("Animal", "Planet");
console.log(user.getFullName());
console.log(user.unchangeableString);

const admin = new Admin("Foo", "Bar");
console.log(admin.firstName);
