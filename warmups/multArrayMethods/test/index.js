let people = [  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ];

  let adults = [  
    {
       firstName: "Kyle",
        lastName: "Mooney",
        age: 27
      },
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },
    {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    }
  ];

describe("Testing multiple array methods.", function() {
    it("should return objects Mooney, Palin, Sanchez", function() {
        assert.deepEqual(sortedOfAge(tests.case1), adults)
    });
    it("should return objects sorted as ages 12, 13, 27, 47, 78", function() {
        assert.deepEqual(sortedOfAge(tests.case2(,peopleAges))
    });
})