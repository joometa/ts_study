// either: a or b
interface Either<L, R> {
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }

  right(): R {
    return this.rightValue;
  }
}

const either = new SimpleEither(2, 3);
either.left(); // 2
either.right(); // 3

const best = new SimpleEither({ name: "hi" }, "man");
either.left(); // {name: 'hi'}
either.right(); // man
