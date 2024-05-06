class Animal{
    constructor(name){
        this.name = name;
        this.run = function(){
            console.log(`${this.name}이 달린다.`);
        }
    }
    eat(){
        console.log(`${this.name}이 먹는다.`);
    }
}

class Rabbit extends Animal{            //래빗의 프로토 타입은 애니멀일거임. (원본이 저거니까 당연!)
    constructor(name,color){
        super(name);            //animal의 생성자 함수를 데려옴.
        this.color=color;
    }
    sample(){                   
        console.log('sample');      
    }
}