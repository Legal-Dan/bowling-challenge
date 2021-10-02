class Bowling {
  constructor (frame, ball, total, past_score) {
      this.frame = 1;
      this.ball = 1;
      this.total = 0;
      this.past_score = [];
  }

  input_score(score) {
    this.past_score.push(score);
    if (this.ball == 1) {
      this.calculate_strike(score);
    }
    else {
      this.calculate_spare(score);
    }
  }

  update_frame() {
    if (this.frame < 10) {
      this.frame++;
    }
    else {
      this.frame = 1;
      this.total = 0;
    }
  }

  calculate_spare(score) {
    if (this.ball == 3) {
      this.ball = 1;
      this.total += score;
      this.update_frame();
    }
    else if (this.past_score[19] + score == 10 && this.frame == 10) {
      this.ball = 3;
      this.total += score;
    }
    else if (this.past_score[19] + score == 10) {
      this.ball = 1;
      this.total += score;
      this.update_frame();
    }
    else {
      this.ball = 1;
      this.total += score;
      this.update_frame();
    }
  }

  calculate_strike(score) {
    if (score == 10) {
      this.total += score;
      this.frame++;
    }
    else {
      this.total += score;
      this.ball++;
    }
  }

};