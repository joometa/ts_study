// interface란? 서로간의 약속을 의미할 수 있다.

interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: "세호",
};

// seho 라는 변수는 User라는 interface로 정의 되어있는데 User 인터페이스는 age,name을 반드시 가져야한다.

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}
const joo = {
  age: 28,
  name: "정",
};
getUser(joo);

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 함수의 스팩(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number;
}

var sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 인덱싱(인덱싱 방식 정의)
interface StringArray {
  [index: number]: string;
}
var arr: StringArray = ["a", "b", "c"];
arr[0]; // "a" -> string

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {});

//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}
// person 인터페이스를 상속받은 developer 인터페이스는 name, age, language 모두를 갖게된다.
// extends (상속할 인터페이스)

var jeong: Developer = {
  language: "ts",
  age: 100,
  name: "정주",
};
