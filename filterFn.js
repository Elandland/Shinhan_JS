const arr = [1,2,3,4,5];
const result = arr.filter((item,idx)=> {        //인자를 함수를 받음. item,idx 그 후 return이 true인 애들만 모아서 새 배열을 만듦
    return item >3;
})      
console.log(result);