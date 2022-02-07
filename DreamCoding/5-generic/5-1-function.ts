{
  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
