class Bowling {
  constructor (frame, ball, total) {
      this.frame = 1;
      this.ball = 1;
      this.total = 0;
  }

  input_score(score) {
    this.total += score
    console.log(this.total)
    if (this.ball == 1) {
      this.ball++
    }
    else {
      this.ball = 1
      this.update_frame()
    }
  }

  update_frame() {
    if (this.frame < 10) {
      this.frame++;
    }
    else {
      this.frame = 1;
    }
  }
};