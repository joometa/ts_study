// 타입 추론

var a; // any 추론
var b = 10; // 할당시 할당된 값의 타입으로 추론
var c = "abc"; // ""

// d 는 10으로 기본값 지정해주었음. d의값을 따로 할당해주지 않으면 10으로 넘어갈 것이고
// 함수 내부에서 number + string 이기때문에 이는 자동적으로 string값으로 추론을 하게 됨. ex -> 10 + '10' = '1010'
function getD(d = 10) {
  var e = "hi";
  return d + e;
}
