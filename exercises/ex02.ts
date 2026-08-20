interface Animal {
  breed: string;
  name: string;
}

interface SoundMaker {
  makesound(): void;
}

class Pet implements Animal, SoundMaker {
  breed: string;
  name: string;

  constructor(breed: string, name: string) {
    this.breed = breed;
    this.name = name;
  }

  makesound(): void {
    console.log(`${this.name} says Woof!`);
  }
}

const myDog = new Pet("poodle", "Frufru");
myDog.makesound();
