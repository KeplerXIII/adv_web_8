class ErrorRepository {
  constructor(errors) {
    this.errLib = new Map(errors);
  }

  translate(code) {
    if (this.errLib.has(code)) {
      return this.errLib.get(code);
    }
    return this.errLib.get(999);
  }
}

export default ErrorRepository;
