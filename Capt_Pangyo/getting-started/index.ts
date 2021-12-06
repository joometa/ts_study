function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 20);

// ts파일을 컴파일 시키기위해 tsc index.ts 라는 명령어를 사용하였다.
// tsc 명령어를 좀더 구체적으로 설정하기 위해 tsconfig.json 파일을 만든다.

// tsc 명령어로 컴파일하는방법도 있지만 웹팩으로 변환이 가능하기떄문에 웹팩에 대해서 공부를 해둘 필요가 있다.
