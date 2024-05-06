function Animal(name){
    this.name = name;
    this.run = function(){
        console.log(`${this.name} 동물이 달린다.`);
    }
}

const animal = new Animal("사자");
console.log(animal);
console.log(animal.constructor);
animal.run();