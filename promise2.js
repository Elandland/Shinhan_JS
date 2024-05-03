function fastFunction(data){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            const result = data *2;
            console.log('Fast function done',result);

            resolve(result);
        },1000)
    })
}

function slowFunction(data){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            const result = data +10;
            console.log('Slow function done',result);
            
            resolve(result);
        },3000)
    })
}

function runTasks(){
    return fastFunction(10).
    then((data)=>{
        return slowFunction(data);
    }).then(data=>{
        console.log("작업 완료");
    }).catch(err=>{
        console.error(err);
    })
}

const sample = runTasks();

console.log(sample);
//pending : 종료x
//fufilled: 성공
