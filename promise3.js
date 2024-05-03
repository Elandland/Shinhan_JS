const delay = ms => new Promise(resolve => setTimeout(resolve,ms));

function fastFunction (data){
    return new Promise((resolve, rejcet)=>{
        setTimeout(function(){
            const result = data *2;
            console.log('Fast function done',result)        //20
            resolve(result);
        },1000);
    })
}
/*
async function fastFunction(data){
    await delay(1000);
    const result = data*2;
    console.log("Fast Function done",result);
    return result;
}
*/

async function slowFunction (data){             //async function은 await으로 기다릴 수 있음.
    await delay(3000);
    const result = data+10;
    console.log('slow function done', result)
    return result;
}

async function runTasks(){
    let result = await fastFunction(10);        //error 처리를 따로 빼줘야함. reject의 상황이 없으므로.
    result = await slowFunction(result);
    console.log("작업완료",result);
}

const sample = runTasks(); 
console.log(sample);

// await가 가지는 문법적 뜻이 promise랑 같은듯??