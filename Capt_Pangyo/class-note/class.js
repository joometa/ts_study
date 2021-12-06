// Built-in Javascript API
// Array 를 선언하면 array의 property 가 자동으로 적용되는 것들 ex. array.push  , object.key

// Javascript Class
// class , function 비교
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var thor = new Person("톨", 200);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var hulk = new Person("헐ㅋ", 45);

// 위 함수와 클래스는 완전히 같은 기능을 한다. 초창기에 클래스에만 있었던 constructor 는 프로토타입기반의 상속으로 인해
// 함수에서도 따로 constructor 선언없이 상속을 받을수 있게 되었음.
