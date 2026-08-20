interface Bird {
  breed: string;
  size: string;
  movement: string;
}

interface Horse {
  breed: string;
  size: string;
  movement: string;
}

type Animals = Bird | Horse;

function moveAnimal(animal: Animals): string {
  let result = "";
  switch (animal.breed) {
    case "bird":
      result = animal.movement;
      break;
    case "horse":
      result = animal.movement;
      break;
    default:
      result = "this animal doesn't move";
  }

  return `This ${animal.size} ${animal.breed} ${animal.movement}`;
}

const littleBird: Animals = {
  breed: "bird",
  size: "small",
  movement: "fly",
};

const bigHorse: Animals = {
  breed: "horse",
  size: "big",
  movement: "gallop",
};

console.log(moveAnimal(littleBird));
console.log(moveAnimal(bigHorse));
