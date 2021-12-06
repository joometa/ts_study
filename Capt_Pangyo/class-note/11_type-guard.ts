// 타입 가드(Type Guard)
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  // Developer, Person의 공통속성만 접근할 수있는 유니온타입의 특징(복습)
  return {
    name: "Tony",
    age: 23,
    skill: "Iron Making",
  };
}
var tony = introduce();
console.log(tony.skill); // 그래서 겹치지 않는 skill 속성이 에러가 남

// 그래서 겹치지 않아서 에러가 발생하는것을 막기위해 타입가드를 쓰는데 가드를 쓰기전에 단언으로 먼저 구현해보겠음
if ((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  var age = (tony as Person).age;
  console.log(age);
}

// 이렇게 긴 조건문은 타입 가드를 사용하면 짧고 명쾌해진다
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}
// isDeveloper함수 해석 : 결과값은 target is Developer 로 되어있는데 이것이 Developer 인지 아닌지를 출력하겠다는 의미
// return에서 Developer로 단언한 타입의 skill 속성이 undefined가 아니면 true(target is Developer) 맞으면 false(target is not Developer)

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
