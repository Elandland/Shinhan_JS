console.log("go home");

var a =1;
const b = 2;
let c = "go home";

console.log(a,b,c);

a="A";

c="C";

console.log(a,b,c);


function sample(){
    console.log(name1);
    if(true){
        let name1 = 2;
    }
    console.log(name1);
}
sample()        //이래 하면 초기 log가 name이 선언안되서 error가뜨는데

function sample(){
    console.log(name2);
    if(true){
        var name2 = 2;
    }
    console.log(name2);      //이래 하면 초기 name이 선언안돼도 var변수는 함수 제일 처음으로 변수선언을 올려버려서 에러가 안나옴
}
sample()


let multi = `Hello world
Hello JS`;
console.log(multi);     //백틱 쓰면 개행 없어도 그냥 알아서 개행 처리해줌.

let name1 = "go ho\"me";
let multi2 = `hello ${name1}
hello home`;
console.log(multi2);
console.log(multi2.length);

console.log(multi2[10]);
console.log(multi2.toUpperCase());

console.log(multi2.slice(3,8));

let multi3 = multi2.split(' ');
console.log(multi3);

let sample2 = "*";
console.log(sample2.repeat(10));



////////////////////////////////////////

let scores = "     90:30:80    ";
let scores2 = scores.trim().split(":");
let [math,english,science] = scores2;

let result = scores2.reduce(function add(sum,currValue){
    return parseInt(sum)+parseInt(currValue);
},0);

let average = result / scores2.length;


console.log("평균점수는",average,"입니다.");


///////////////////

function min(a,b){ //선언식. 선언하는거라 위에서 써도 됨.
    return a<b ? a: b;
}

const max1 = function(a,b){     //위에서 못쓸듯..?
    return a>b ? a: b;
}

const max2 = (a,b) =>{
    return a>b ? a : b;
}

const k ='1';       //datatype = 문자
const g =1;         //숫자
const h = {         //object
}

const i = [k,g,h];  //배열
const j = function(){};   //함수

