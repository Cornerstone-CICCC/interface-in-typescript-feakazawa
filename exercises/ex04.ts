type Participant = {
  name: string;
  role: string;
};

interface NewEvent {
  date: Date;
  title: string;
  participants: Participant[];
}

let event1: NewEvent;
event1 = {
  date: new Date(),
  title: "Deep Cove Hike",
  participants: [
    {
      name: "German",
      role: "manager",
    },
    {
      name: "Fernanda",
      role: "student",
    },
    {
      name: "Miu",
      role: "student",
    },
  ],
};

console.log(event1);

//inverting the exercise

// type NewEvent = {
//   date: Date;
//   title: string;
//   participants: Participant[];
// };

// interface Participant {
//   name: string;
//   role: string;
// }

// let event2: Participant
// event2 = {
//     name: 'German',
//     role: "manager",
//     date: //error - date doesn't exist in Participant
// }
