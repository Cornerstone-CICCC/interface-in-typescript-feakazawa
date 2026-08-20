interface ErrorContainer {
  [property: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
  password: "Must contain at least 8 digits, numbers and special character",
  name: "Should only contain letters",
  houseNumber: "Should only contain numbers",
};

console.log(errorBag.email);
console.log(errorBag.username);
console.log(errorBag.password);
console.log(errorBag.name);
console.log(errorBag.houseNumber);
