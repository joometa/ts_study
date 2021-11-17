// 타입 추론(1)

var a; // any 추론
var b = 10; // 할당시 할당된 값의 타입으로 추론
var c = "abc"; // ""

// d 는 10으로 기본값 지정해주었음. d의값을 따로 할당해주지 않으면 10으로 넘어갈 것이고
// 함수 내부에서 number + string 이기때문에 이는 자동적으로 string값으로 추론을 하게 됨. ex -> 10 + '10' = '1010'
function getD(d = 10) {
  var e = "hi";
  return d + e;
}

// 타입 추론 (2)
interface Updown<T> {
  value: T;
  title: string;
}

// interface에서 value값을 제네릭과 연결시켰기 때문에 아래 shoppingItem에서 value의 타입이 string인것을 추론할 수 있음
// 하지만 title의 타입은 이미 interface에서 string으로 선언되었기 때문에 고정값이라 변하지 않음
var shoppingItem: Updown<string> = {
  value: "hi",
  title: "hello",
};

// 타입 추론(3)
interface Updown2<T> {
  value: T;
  title: string;
}
interface DetailedUpdown<K> extends Updown2<K> {
  description: string;
  tag: K;
}
// interface DetailedUpdown<K> extends Updown2<K>{  //암묵적으로 위 extends는 이런식으로 동작할 것임
//   description: string;
//   tag: K;
//   value: K;
//   title: string;
// }

// extends한 타입에 제네릭을 number로 지정하니 제네릭과 연결된 키값의 타입들이 number로 자동적으로 추론되어 할당되는것을 알 수 있다.
var detailedItem: DetailedUpdown<number> = {
  title: "abc",
  description: "ab",
  value: 1111,
  tag: 2222,
};
