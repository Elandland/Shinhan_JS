function run(){
    console.log("3초 후 실행");
}


console.log("시작");
setTimeout(run,3000);
setTimeout(()=>setTimeout(run,3000),3000);
console.log("끝");

//예상은 시작->3초 후 실행-> 끝 인데,
//메모리 낭비를 막기 위해 시작-> 끝 -> 3초 후 실행이 나옴.
//보통은 동기식 코드 흐름인데 얘는 비 동기식 코드