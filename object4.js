let arr2 = ["a","b","c","d","e"];
let [v1,v2,...v3] = arr2;

let v4 = ["A","B", ... v3];
console.log(v4);        //['A','B',['c','d','e']] 일줄 알았는데 ...쓰면 배열이 풀어져서 들어감.