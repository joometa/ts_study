// 숫자형 이넘(enum)

enum Shoes {
  Nike,
  Adidas,
}

var myShoes = Shoes.Nike;
console.log(myShoes) // 0  -> 특별히 할당하지 않으면 숫자형 이넘 형태로 변환되고 값이 없으면 0의 값이 할당된다.

// 문자형 이넘(enum)
enum Maker {
  Nike = '나이키',
  Adidas = '아디다스'
}

var myMaker = Maker.Nike;
console.log(myMaker) // '나이키' -> 값을 지정해주면 지정된 값이 출력된다.


// 활용 예제
// 사용 전
function askQuestion(answer: string) {
  if(answer === 'yes'){
    console.log("정답입니다.")
  }
  if(answer === 'no'){
    console.log("오답입니다.")
  }
}
askQuestion('예스');
askQuestion('y');
askQuestion('Yes');

// 사용 후
enum Answer {
  yes = "Y",
  no = "N",
}

function ask(answer: Answer) {
  if(answer === Answer.yes){
    console.log("정답입니다.")
  }
  if(answer === Answer.no){
    console.log("오답입니다.")
  }
}
ask(Answer.yes);
ask(Answer.no);
