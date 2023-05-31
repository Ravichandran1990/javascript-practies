const obj = {
    fname: "Ravichandran",
    lname: "mohan",
    get name() {
        return `${this.fname} ${this.lname}`
    },
    set setName(name) {
        console.log("Testing");
        this.fname = name;
    }
}
obj.setName = "chandhu";
console.log(obj.name);