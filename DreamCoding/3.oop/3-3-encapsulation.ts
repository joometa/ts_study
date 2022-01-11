// 캡슐화

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected
  class CoffeeMaker {
    // 따로 선언안하면 모두 public 이다.
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeCoffeeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 0개 이상이어야 합니다.");
      }

      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -34; -> 외부에서 지정하면 말도안되는 값을 받게됨(invalid) 그래서 숨겨줄 필요가 있다.(private)
  maker.fillCoffeeBeans(12);
  // private을 이용해 함수로 커피빈을 설정할수밖에없게 만들었음. 보안성이 더 높아진다.
}

// 세터와 게터
class User {
  firstName: string;
  lastName: string;
  // fullName: string;
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("lee", "jeongjoo");
// console.log(user.fullName); // get 적용 전
console.log(user.fullName);
