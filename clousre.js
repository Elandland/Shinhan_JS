function createGreeting(greetingPrefix){
    return function(name){
        console.log(greetingPrefix+", "+name+"!");
    };
}

const greetHello = createGreeting("hello");
const greetHi = createGreeting("hi");       // data type function 인자 1개(name)

greetHello("chansol");      //data type function 함수를 데이터 타입으로 봐라.
greetHi("chanchan");        //data type function


function outer(){
    let count =0;
    function inner(){           //outer가 끝나도 count가 살아있음. count를 inner에서 접근하기 때문에 메모리에 살아있음.
        count++;
        return count;
    }
    return inner;
}
/*
const counter = outer();
console.log(counter());
console.log(counter());
*/
/*
function createCounter(){
    let counter =0;
    function inner2(){
        counter++;
        return counter;
    }
    return inner2;
}
const counter1 = createCounter();
console.log(counter1());
console.log(counter1());

const counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter1());
*/
function createIncrementer(start, step){
    let start_t = start;
    function inner3(){                  //이 친구가 몇 step증가할지를 정해주는 함수.
        for(let i =0; i<step; i++){
            start_t++;
        }
        return start_t;
    }
    return inner3;
}

const incByOne = createIncrementer(5, 1);

console.log(incByOne()); // 6
console.log(incByOne()); // 7
 
const incByTen = createIncrementer(10, 10);
 
console.log(incByTen()); // 20
console.log(incByTen()); // 30