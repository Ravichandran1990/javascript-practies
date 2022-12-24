const obj = {
    "quiz": {
        "sport": {
            "q1": {
                "test": {
                    "test1": "Testing",                    
                    "test": {
                        "test": "Testing1",
                    }
                },
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                    
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    "10",
                    "11",
                    "12",
                    "13"
                ],
                "answer": "12"
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "answer": "4"
            }
        }
    }
};
let arrN = [];
function recursive(obj) {
    if(!Array.isArray(obj) && typeof obj !== 'string'){
        const obj1 = Object.values(obj);
        obj1.forEach(o => recursive(o));
    } else {
        if(typeof obj === 'string') {
            arrN.push(obj);
        }else {
            obj.map(om => arrN.push(om));
        }
        
    }
}

console.log(recursive(obj));
console.log(arrN);
