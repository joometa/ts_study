// 연산자를 이용한 타입 정의 - Union Type

// function logMessage(value: any){
//   console.log(value)
// }

// logMessage("hello");
// logMessage(100);

// 하나의 변수에 두개 이상의 타입을 지정하고 싶을때 사용한다. ' | '
var seho: string | number | boolean;
function logMessage(value: string | number){
  if(typeof value === "number"){
    value.toLocaleString(); // 연산자를 사용하고 타입을 체크하면 해당 타입에서만 사용할 수 있는 property를 바로 쓸수있다.
  }
  if(typeof value === 'string'){
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage("hello");
logMessage(100);

