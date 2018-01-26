let arr = [  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47,
      pets: ["dog", "cat"]
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12,
      pets: ["dog"]
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78,
      pets: ["cat", "parrot"]
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13,
      pets: ["cat", "parrot", "dog"]
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27,
      pets: ["dog"]
    }
  ];

  let sortedDogOwners = function(arr) {
      let dogArray = [];
      for(let i=0; i<arr.length; i++) {
          for(let j=0; j<arr[i].pets.length; j++) {
              if(pets[j] === "dog") {
                  dogArray = arr.push(arr[i]);
                  j = arr[i].pets.length; // to stop the inner for loop
              }
          }
      }
      for(let k = 0; k < dogArray.length; k++) {
          
      }
      return dogArray;
    }
