const delay = ms => new Promise(resolve => setTimeout(resolve,ms));

async function fastFunction(data){
    await delay(1000);
    const result = data*2;
    console.log("Fast Function done",result);
    return result;
}


async function slowFunction (data){             //async function은 await으로 기다릴 수 있음.
    await delay(3000);
    const result = data+10;
    console.log('slow function done', result)
    return result;
}

function runTasks(){
    Promise.all(
        [fastFunction(5),slowFunction(10)]
    // }.then((result1, result2)=>{
    //     console.log('작업종료');
    //     console.log(result1);
    //     console.log(resulnt)
    ).then((data)=> {
        console.log("작업완료");
        console.log(data)});
}

runTasks();