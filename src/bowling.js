class Bowling {
  constructor (frame, ball, total) {
      this.frame = 1;
      this.ball = 1;
      this.total = 0;
  }

  input_score(score) {
    this.total += score
    if (this.ball == 1) {
      this.ball++
    }
    else {
      this.ball = 1
      this.frame++
    }
  }
};