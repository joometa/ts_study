{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    BEANS_GRAMM_PER_SHOT = 7;
    coffeeBeans: number = 0;

    // new 생성자로 만들때 바로 쓰이는 함수부분
    constructor(coffeeBeans: number) {
      // this는 클래스꺼, 아닌건 constroctor 인자꺼
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * this.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
}
