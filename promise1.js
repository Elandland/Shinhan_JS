new Promise((resolve, reject)=>{
    console.log("Promise1");
    const value = 10;
    if(value===10){
        resolve(value);
    }else{
        reject(value);
    }
}).then(data=>{
    console.log("Resolve!");
    console.log(data);
}).catch(err=>{
    console.error("Reject");
    console.error(err);
})              //promise를 호출했을때

// then에 받는 data가 resolve에 매치가 되서 실행. 
//value값이 then의 data로 사용, reject되면 catch의 err로씀
//console.log와 error는 로그의 레벨이 다름.