// 타입 단언(type assertion)
var A;
A = 20;
A = "a";
// var b = a;  당연히 a 는 string일것으로 판단이 되고 b도 string이 될것이다. 하지만 b 는 any로 할당된다.

var B = A as string; // 이를 막고자 as 를 사용해서 타입을 단언 시킨다.

// 실제 타입단언 사용 예시
// DOM API 조작

let div = document.querySelector("div"); // div태그가 있다면 HTMLDivElement 타입이지만 없는 태그를 찾고있을수있기때문에 null 값이 될수도있음
div.innerText; // 그래서 이런 HTMLDivElement 에서만 사용되는 속성을 쓰면 null 일 가능성때문에 에러가 발생하게됨

// 에러를 없애기 위해 null값이 아닐 경우의 조건을 걸어주거나 앞서 배운
if (div) {
  div.innerText;
}

// as 를 사용하여 타입을 단언해주는 경우가 있음
let div2 = document.querySelector("div") as HTMLDivElement;
div.innerText;
