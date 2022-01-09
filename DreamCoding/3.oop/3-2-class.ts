{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT = 7; // class level
    coffeeBeans: number = 0; // instance(Object) level

    // new 생성자로 만들때 바로 쓰이는 함수부분
    constructor(coffeeBeans: number) {
      // this는 클래스꺼, 아닌건 constroctor 인자꺼
      this.coffeeBeans = coffeeBeans;
    }

    static makeCoffeeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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
  // static 활용해서 new 생성자 없이 바로 객체단위로 생성시키는것도 가능
  // ex: const absolute = Math.abs(12.51);
  const maker2 = CoffeeMaker.makeCoffeeMachine(7);

  // static 사용 안할시에는 그냥 생성자로 클래스 만들면 그안에 일관되게 들어있음
}
