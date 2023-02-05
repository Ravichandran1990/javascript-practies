 const obj = {
    name: "Ravi",
    lname: "Kiran",
    dob: "12/12/1995"
 }

 function sharedObj(objectShared) {
    objectShared.name = "Vihaan"
    console.log(objectShared.name);
 }

 sharedObj({...obj});

 console.log(obj.name);