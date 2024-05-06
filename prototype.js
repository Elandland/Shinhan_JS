//javascript는 상속을 prototype으로 한다.
//prototype은r 고유한 생성자로 만든 인스턴스들이 공유할 함수가 존재하는 곳


function Animal(name){
    this.name = name;
    this.run = function(){
        console.log(`${this.name} 동물이 달린다.`);
    }
}
Animal.prototype.eat = function(){      //만들어진 생성자에 상속할 애들이 존재?
    console.log(`${this.name} 가 먹는다.`);
}


Rabbit.prototype = Object.create(Animal.prototype);     //Animal.prototype을 prototype으로 가지는 Rabbit.prototype을 만듦
Rabbit.prototype.constructor = Rabbit;          //이게 없으면 rabbit.constructor가 animal을 가리킴.

const rabbit1 = new Rabbit("토끼","white");

rabbit1.run();
rabbit1.eat();
console.log(rabbit1);
console.log(rabbit1.constructor);
console.log(rabbit1.__proto__);         //rabbit.__proto__는 Rabbit.prototype이니까 = Animal.prototype임.
                                        //rabbit에 없어도 __proto__를 참조하여 eat과 run을 실행 할 수 있음
console.log(rabbit1.__proto__.__proto__);


//animal.__prototype__ = Animal.prototype
//anmial.<특정속성> 호출시 자기자신의 this.속성(메소드)에 없는 속성이라면 animal.__proto__에서 찾는다.


//상속 구현 예시
function Rabbit(name,color){
    Animal.apply(this,arguments);       //arguments는 관습적으로넣는듯
    this.color = color;
}

Rabbit.prototype = Object.create(Animal.prototype);     //create로 굳이굳이 복사해서 만들어주는 이유는. animal프로토 타입과 동등으로 가져와버리면
                                                        //Rabbit.prototype에 새 함수를 생헝할때 animal도 같이 바뀔까봐 사본 떠서 작업하는 느낌.
Rabbit.prototype.constructor = Rabbit;          //래빗에 없으면 래빗 언더바 프로토를 참조하도록 해.

const rabbit = new Rabbit("토순이", "brown");