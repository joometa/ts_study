// Union Type - |

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

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}


// Union type - |
// Union type 으로 여러개를 썼을때는 공통된 속성, 즉 보장된 속성만 사용이 가능하다. 겹치지않으면 오류가능성이 있다고 판단하기 때문에 접근을 막음
function askSomeone(someone: Developer | Person){
  someone.name;
  // someone.skill  // error
  // someone.age    // error
}
askSomeone({name: "디벨로퍼", skill: "한컴타자연습"})
askSomeone({name: "사람", age: 100})
// Developer or Person 중에 하나만 선택해서 파라미터 넘기기 가능


// intersection type - &
function askSomeone2(someone: Developer & Person){
  someone.name;
  someone.skill
  someone.age
}
// Union 과는 달리 선언된 타입의 속성을 모두 포함시킨다.

askSomeone2({name: "디벨로퍼", skill: "한컴타자연습", age: 100})
// Developer 와 Person 속성을 모두 가진 새로운 속성을 요구하게 된다.

