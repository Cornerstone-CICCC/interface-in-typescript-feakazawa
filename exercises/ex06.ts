type StringOrNumber = string | number;

function printInfo(arg: StringOrNumber) {
  if (typeof arg === "string") {
    return `${arg} - is a string`;
  }

  return arg;
}

console.log(printInfo("I love my cat"));
console.log(23);
