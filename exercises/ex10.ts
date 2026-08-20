interface User {
  name: string;
  address?: { street: string; zipCode: string };
}

const user1: User = {
  name: "Josie",
  address: { street: "900 Cambie St", zipCode: "V6B 4X5" },
};

const user2: User = {
  name: "Malu",
  address: { street: "", zipCode: "V6B 5X5" },
};

console.log(user1?.address?.zipCode);
console.log(user2?.address?.street); //console.log is empty
