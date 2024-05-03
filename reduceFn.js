const arr = [1,2,3,4,5];

const result = arr.reduce((prev,cur,idx,arr)=>{ 
         //prev 의 이니셜 벨류가 10. 2번째 인자가 이니셜 밸류
    console.log(prev,cur,idx,arr);
    console.log("-".repeat(10));
    return prev+cur;
},10);      //얘가 이니셜 밸류

console.log(result);
