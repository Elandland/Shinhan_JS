let x = [3,6,9,20,-7,5];
let y = {"math" : 70,"science" : 80,"english" : 20};

for(let i of x){
    console.log(i*10);
}

console.log("-".repeat(30));

for(let j in y){
    console.log(y[j]+10);
}

