const obj = {
    title : '나다',
    name : '임찬솔',
    money : '30000',
}
for (let i in obj){
    console.log(i);         //key값 나옴
}
console.log('-'.repeat(30));

const arr1 = ['a','b','c'];
for(let i in arr1){
    console.log(i);
}