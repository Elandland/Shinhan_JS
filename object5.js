let options = {
    title : "Menu",
    width : 100,
    height : 200,
    k1: 'v1',
    k2: 'v2',
};

let option2 = {
    newKey: "새로운 값",
    title: "newTitle",
    ...options,
    width : 50,
}

console.log(option2);