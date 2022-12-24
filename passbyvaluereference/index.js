function passByValue(a,b,c) {
    a = a * 2;
    b = b *2;
    c = c * 2;
    console.log("func value "+ a, b, c);
};

a = 3;
b = 4;
c = 6;
passByValue(a,b,c);
console.log("a b c "+ a, b, c);


function passByReference(a, b, c) {
    console.log("Befor ref variable changes "+b.name);
    a = a * 5;
    b.name = "Ravichandran",
    c = c * 4;
    console.log("inside function "+ b.name);
}

a = 3;
b = {
    name: "chandhu"
},
c = 4;
passByReference(a, b, c);
console.log("outside reference variable "+ b.name, a, c);