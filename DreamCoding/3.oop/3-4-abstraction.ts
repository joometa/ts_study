// 추상화

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 3가지 함수가 지정된 인터페이스
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // implements 를 쓰면 이어오는 인터페이스 규약을 따라가게 되는듯
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 0개 이상이어야 합니다.");
      }

      this.coffeeBeans += beans;
    }

    // 원두 갈기
    grindBeans(shots: number) {
      console.log(`${shots}잔 분의 커피원두를 갈고 있습니다.`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }
    preheat(): void {
      console.log("커피 데우는중...🎈");
    }
    extract(shots: number): CoffeeCup {
      console.log(`${shots}잔의 커피를 내리는 중입니다.`);
      return { shots, hasMilk: false };
    }

    clean() {
      console.log("기계 청소중...✨");
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(32);
  maker.makeCoffee(2);

  // 생성할때 인터페이스를 지정해두면 해당 생성자에 존재하는 함수들을 인터페이스 안에있는것들로만 제한하여 사용할 수 있음.
  const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(44);
  maker2.makeCoffee(11);
  maker2.fillCoffeeBeans(33);
  maker2.clean();
}
