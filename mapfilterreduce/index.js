const arr = [
    {
      fName:'test',
      image: 'test.jpg',
      age: 15 
    },{
      fName:'test1',
      image:'test.jpg',
      age: 13
    },
    {
        fName:'test_12',
        image: 'test.jpg',
        age: 13 
    }
  ]

  const jMap = arr.filter((obj) => {       
    return  obj.age <= 13;
  })
  .map((obj) => {       
     return  obj.age;
  })
  .reduce((prevV,currentValue) => {       
        return  prevV + (currentValue);
  }, 0); 
  console.log(jMap);
   