let cnt = 0;

function limitCalls(func, n) {
    return function() {
        if (++cnt <= n) {
            return func();
        } 
    };
}

const limitedHello = limitCalls(() => console.log("Hello"), 2);

// function limitCalls(func, n){
//     let a =0;
//     return ()=>{
//         if(a<n){func();a++;}
//     }
// }
limitedHello();
limitedHello();
limitedHello();
limitedHello();