{
  // Light switch: boolean
  // Email: string
  // spaceship: object
  // student list: array
  // student list with location: array of objects, name and location
  // student list with more info: array of objects, name, location, and an array of shows
}

{
  let rainbow = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ];
  console.log(rainbow[4]);
  const Ethan = {
    favFood: "pizza",
    hobby: "photography",
    town: "LA",
    datatype: "bool"
  };
  console.log(Ethan.hobby);
}

{
    const crazyObject = {
        taco: [
          {
            meat: 'steak',
            cheese: ['panela', 'queso', 'chihuahua']
          },
          {
            meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
          },
        ],
        larry: {
          nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
          quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
          characters: [
            {
              name: "Jeff",
              occupation: "manager"
            },
            {
              name: "funkhauser",
              occupation: "tv dude"
            },
            {
              name: "susie",
              occupation: "jeffs wife",
              favourtieHobby: "Swearing at Larry and Jeff"
            },
          ]
        }
      }
      console.log(crazyObject.taco[1].salsa[5]);
      console.log(crazyObject.larry.quotes[0]);
      console.log(crazyObject.larry.characters[2].favourtieHobby);
      console.log(crazyObject.larry.nicknames[1]);
      console.log(crazyObject.larry.characters);
}

{
    const inception = {
        reality: {
            dreamLayer1: {
                dreamLayer2: {
                    dreamLayer3: {
                        dreamLayer4: {
                            dreamLayer5: {
                                dreamLayer6: {
                                    limbo: "Joseph Gordon Levitt"
                               }
                            }
                        }
                    }
                }
            }
        }
     }
    inception.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo=null;
}