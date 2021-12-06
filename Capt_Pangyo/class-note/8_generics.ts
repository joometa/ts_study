// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(100);  // 숫자 10
// logText("hi");  // 문자열 hi
// logText(true)   // 진위값 true

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
logText<string>("하이");

// 기존 타입 정의 방식과 제네릭의 차이점 - 함수 중복 선언의 단점
function logText1(text: string) {
  console.log(text);
  text.split("").reverse().join(); // string일때만 사용할 수 있는 코드
  return text;
}

function logNumber(text: number) {
  console.log(text);
  return text;
}
logText1("gd");
logNumber(222);
// 이처럼 거의 같은내용의 코드가 타입 차이때문에 불필요하게 여러번 선언해야되는 문제가 생긴다. 이를 보완하기위해 유니온 타입을 사용할 순 있다.

function logTextUnion(text: string | number) {
  console.log(text);
  // text.split("").reverse().join();
  // string일때만 사용할 수 있는 코드이지만 현재 text는 string과 number 둘다 갖고있고 number에선 split을 사용할수없기때문에 마찬가지로 에러가 난다.
  return text;
}
logTextUnion("gd");
logTextUnion(1313);

function logGeneric<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logGeneric<string>("abc"); // <string>을(재네릭) 써준순간 파라미터와 return 값의 타입 모두 string으로 인식을 하게 된다.

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: "abc", selected: true }; // 선언쪽에 string 제네릭을 걸어줌으로서 value의 타입은 따로선언해주지 않아도 string이 된다.

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]) {
  console.log(text.length);
  text.forEach((item) => {
    console.log(item);
  });
  return text;
}

logTextLength<string>(["hi", "abcc"]);
//-------------------------------------------------------------------------
// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

// function logTextLength2 <T>(text:T): T{
//   text.length;
//   return text;
// }  에러남

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
} // 에러안남 : 이미 선언된 LengthType을 포함(확장) 시켰기 때문에 -> extends

//--------------------------------------------------------------------------
// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// extends keyof "" 는 ""의 선언된 타입의 key값중에 하나만 사용이 가능하다는 뜻 다른값을 파라미터에 담을 수 없게 제한함
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption("name"); // 가능
// getShoppingItemOption("shit"); // ShoppingItem 타입안에있는 key값(name, price, stock)이 아니기때문에 오류남ㅋ
