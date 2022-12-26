const arr = [
    {
      title:'test',
      image: 'test.jpg',
      category:[
        {
          title:'test1',
          image: 'test1.jpg',
        },
        {
          title:'test2',
          image: 'test2.jpg',
        },
        {
          title:'test3',
          image: 'test3.jpg',
        },
        {
          title:'test4',
          image: 'test4',
        }
      ]
      
    },{
      title:'test',
      image:'test.jpg'
    },
    {
        title:'test_1234',
        image: 'test.jpg',
        category:[
          {
            title:'test1_321',
            image: 'test1.jpg',
          },
          {
            title:'test2_431',
            image: 'test2.jpg',
          },
          {
            title:'test3_4321',
            image: 'test3.jpg',
          },
          {
            title:'test4_4321',
            image: 'test4',
          }
        ]
        
      },
      {
          title:"Testing345"
      },
      {
          title:"Testing32",
          fName:"Karma"
      },

  ];

  const arrF = [];

  function recurF(data) {
       for (const key in data) {
           if (typeof data[key] === 'object') {
               recurF(data[key])
           }
           key === 'title'? arrF.push(data[key]) : ""
       }
       
       return arrF
  }

  console.log(recurF(arr));
 