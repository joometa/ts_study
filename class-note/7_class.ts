class PersonT {
  private name: string; // private : 해당 클래스 안에서만 사용하겠다.(유효범위설정)
  public age: number; // public : 기본값
  readonly log: string; // readonly : 읽기전용

  // 변수 타입 지정없이 파라미터에 담으면 에러가 발생한다. (javascript와의 차이점)
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
