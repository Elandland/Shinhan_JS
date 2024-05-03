const num = parseInt(prompt("정수를 입력해주세요"));

let message;
if(num%2===0){
    message = "입력하신"+num+"은 짝수입니다.";
}
else{
    message = "입력하신"+num+"은 홀수입니다.";
}

alert(message);