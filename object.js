const KEY = 'SAMPLE';
const johnProfile ={
    name: "john",
    sayHi: function(){
        console.log(this.name, ": 나는 존이다. 존나세다.");
    },
    [KEY] : "sampleValue",
};

johnProfile.sayHi();
console.log(johnProfile['sayHi']);
console.log(johnProfile.SAMPLE);