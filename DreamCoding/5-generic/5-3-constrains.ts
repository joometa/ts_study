// 제네릭 조건

interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log("Full Time!!");
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay(): void {
    console.log("Part Time!!!");
  }
  wordPartTime() {}
}

// 세부적인 타입(단순 Employee)을 인자로 받아서 추상적인(ex. FullTimeEmployee) 타입으로 다시 리턴하는 함수는 쓰레기다.
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// Employee 를 확장한 T 타입만을 제네릭으로 받겠다! (조건)⭐️⭐️
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const jeong = new FullTimeEmployee();
const joo = new PartTimeEmployee();

const jeongAfterPay = pay(jeong);
const jooAfterPay = pay(joo);
