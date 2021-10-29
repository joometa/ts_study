// 타입 별칭 : 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.
// 장점 : 쉽게 타입을 정의 할 수 있고 코드가 짧아지며 가독성이 높아진다.

// interface People {
//   name: string;
//   age: number;
// }

type People = {
  name: string;
  age: number;
};

var seho: People = {
  name: "세호",
  age: 30,
};

// 타입을 함수에 적용한 예
type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {
  console.log("완성");
}

//----------------------------------------------------------------------------
// 타입 별칭과 인터페이스의 차이점

// 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.
// VScode에서 커서를 올리면 프리뷰가 보이는데 이때 보여지는 정보에서 차이가있음

// 👍결정적 차이(확장 가능 여부)
// 인터페이스는 확장(상속 등)이 가능한 데 반해 타입별칭은 확장이 불가능하다. 따라서, 가능한한 type 보다는 interface로 선언해서 사용하는것을
// 추천한다.
