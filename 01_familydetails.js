
let familytree = {
    name: "sagir ahmad",
    age: 80,
    child: [
      {
        name: "shaukat ali",
        age: 42,
        ocuupation: "labour",
        vehicle: [
          {
            name: "Shine",
            number: 2232,
          },
          {
            name: "thar",
            number: 4444,
          },
        ],
        son: [
          {
            name: "saif ali",
            age: 22,
          },
        
        ],
      },
      {
        name: "Shahabuddin",
        age: 40,
        ocuupation: "labour",
        vehicle: [
          {
            name: "Shine",
            number: 1234,
          },
          {
            name: "thar",
            number: 1235,
          },
        ],
        son: [
          {
            name: "tahid ali",
          },
        ],
      },
      {
        name: "salim shah",
        age: 50,
        ocuupation: "labour",
        vehicle: [
          {
            name: "DUKE",
            number: 1234,
            type: "Bike",
          },
          {
            name: "thar",
            number: 1234,
            type: "car",
          },
        ],
        son: [
          {
            name: "azad",
          },
        ],
      },
    ],
  };

  console.log(familytree.name);
  console.log(familytree.child[1].name);
  console.log(familytree.child[1].son[0].name);
  console.log(familytree.child[2].vehicle[0].name);
  console.log(familytree.child[0].vehicle[0].number);