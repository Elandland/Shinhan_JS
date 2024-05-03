// fetch("https://jsonplaceholder.typicode.com/todos/").then(resp=>{
//     console.log(resp);
//     return resp.json();
// }).then(data=>{

//     console.log(data);
// })


// const desiredState = true;                  //Todo 중 completed = ture인거

// fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then(resp => {
//         console.log(resp);
//         return resp.json();
//     })
//     .then(data => {
//         const desiredTodos = data.filter(todo => desiredState===(todo.completed));
//         console.log(desiredTodos);
//     })



// const desiredTodoIds = [1, 3, 5, 7, 9]; // 선택하고자 하는 todo의 ID 배열

// fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then(resp => {
//         console.log(resp);
//         return resp.json();
//     })
//     .then(data => {
//         const desiredTodos = data.filter(todo => desiredTodoIds.includes(todo.id));
//         console.log(desiredTodos); // 선택된 todo 객체 출력
//     })



let promises=[]

for(let i =0; i<5; i++){
    let todoId = i*2+1;
    
    let promise = fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(resp => {
            return resp.json();
        })
        .then(data => {
            return data;
        })
    promises.push(promise);

}

Promise.all(promises)
.then((data)=> {
    console.log(data);
});

//아마 then하는 부분을 await해주면 될거 같다!