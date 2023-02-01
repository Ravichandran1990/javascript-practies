const user_List = {
    1: {name: "Ravi"},
    2: {name: "Chandran"}
}

const userList = new Map(
    [1, {name: "Ravi"}],
    [2, {name: "Chandran"}]
)

console.log(userList.get(1));