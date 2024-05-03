const age1 = parseInt(prompt("1번째 점수를 입력해주세요"));
const age2 = parseInt(prompt("2번째 점수를 입력해주세요"));
const age3 = parseInt(prompt("3번째 점수를 입력해주세요"));

let message;
if(age1>65&&age2>65&&age3>65){
    message = "합격";
}
else if((0>age1||100<age1)||(0>age2||100<age2)||(0>age3||100<age3)){
    message = "잘못된 점수가 입력되었습니다.";
}
else{
    message = "불합격";
}
alert(message);