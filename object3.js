let options = {
    title : "Menu",
    width : 100,
    height : 200,
    k1 : 'v1',
    k2 : 'v2'
}

const {title,width,height:h,...rest} = options;

console.log(title);
console.log(width);
console.log(h);
console.log(rest);