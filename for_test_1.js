const num = parseInt(prompt("정수를 입력해주세요"));

for(let i=0; i<num; i++){
    console.log("안녕");
    console.log("*".repeat(i+1));
    console.log("*".repeat(num-i));
}