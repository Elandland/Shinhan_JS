function Animal(name){
    this.name = name;
    this.run = function(){
        console.log(`${this.name} 동물이 달린다.`);
    }
}

const animal = new Animal("사자");
console.log(animal);
console.log(animal.constructor);
animal.run();           //this.run이 있는가? -> 있네 실행

Animal.prototype.eat = function(){      //만들어진 생성자에 상속할 애들이 존재?
    console.log(`${this.name} 가 먹는다.`);
}

animal.eat();           //this.eat이 있나? -> 없으면 생성자함수.prototype으로 가서 찾음. 
console.log(animal);    
console.log(__proto__);     //내가 만들어진 생성자 함수의 프로토 타입에 접근