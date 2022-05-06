"use strict";
class User {
    constructor(firstName, lastName) {
        this.unchangeableString = "unchangeable";
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableString = firstName + " " + "The Unchangeable";
    }
    changeUnchangeableString() {
        // this.unchangeableString = "Changed"; // This is not allowed . Cannot assign to 'unchangeableString' because it is a read-only property.ts(2540)
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
class Admin extends User {
    setEditor(editor) {
        this.editor = editor;
    }
    getEditor() {
        return this.editor;
    }
}
const user = new User("Animal", "Planet");
console.log(user.getFullName());
console.log(user.unchangeableString);
const admin = new Admin("Foo", "Bar");
console.log(admin.firstName);
