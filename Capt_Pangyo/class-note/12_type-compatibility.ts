// 타입 호환 (Type Compatibility)
// 타입스크립트 코드에서 특정 타입이 다른 타입에 잘 맞는지를 의미한다. 예를 들면 아래와 같은 코드를 의미한다.
interface Ironman {
  name: string;
}

class Avengers {
  name: string;
}

let i: Ironman;
i = new Avengers(); // extends(상속) 받지않았음에도 에러가 발생하지 않는다.

//---------------------------------------------------------------------------------------------------------

interface Developer {
  name: string;
  skill: string;
}

interface PersonA {
  name: string;
}
var developer: Developer;
var person: PersonA;
// developer = person;   error
// person = developer;   Ok : 좌항의 구조가 우항의 구조보다 작으면 구조적으로 할당이 가능하다. 반대면 불가능

// 함수
var add = function (a: number) {
  //...
};
var sum = function (a: number, b: number) {
  //...
};
sum = add; // 좌항의 sum은 두개의 파라미터를 이미 받았기때문에 한개만받으면되는 우항의 add로 호환이 가능하다.
// add = sum; // 좌항의 add는 하나의 파라미터뿐인데 우항의 sum은 두개를 필요로한다. 그래서 좌항은 우항과 호환이 불가하다.

// 제네릭
interface Empty<T> {
  //..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1; // 순서를 바꿔도 가능한 이유는 현재 Empty 제네릭 내부에 제네릭으로 값이 변동될만한 무언가가 하나도 없기 때문이다.

interface NotEmpty<T> {
  name: T;
}
var empty3: NotEmpty<string>;
var empty4: NotEmpty<number>;
// empty3 = empty4;
// empty4 = empty3;  제네릭에의해 변하는 내부의 값이다르다. 즉 구조적으로 다르기 때문에 에러가 발생함
