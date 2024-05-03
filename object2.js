//가변 인수
//키워드 인수

let arr = ["Kim","Shin"];

let[name1,name2] = arr;

console.log(name1);
console.log(name2);

let arr2 = ['a','b','c','d'];
let [v1,v2,...v3] = arr2;
console.log(v1);
console.log(v2);
console.log(v3);