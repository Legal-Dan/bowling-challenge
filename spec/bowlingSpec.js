describe("Bowling", function() {

  it("should start with a total of 0", function() {
    let bowling = new Bowling();
    expect(bowling.total).toEqual(0);
  })

  it("should be possible to add a new score and see the total increase", function() {
    let bowling = new Bowling();
    bowling.input_score(5)
    expect(bowling.total).toEqual(5);
  })

  it("should be possible to add a new score and see the total increase", function() {
    let bowling = new Bowling();
    bowling.input_score(5)
    expect(bowling.total).toEqual(5);
  })

  it("the ball count should increase to 2 and then reset to 1 for the next frame", function() {
    let bowling = new Bowling();
    bowling.input_score(5)
    expect(bowling.ball).toEqual(2);
    bowling.input_score(5)
    expect(bowling.ball).toEqual(1);
  })

  it("the frame count should increase after 2 balls", function() {
    let bowling = new Bowling();
    bowling.input_score(5)
    bowling.input_score(5)
    expect(bowling.frame).toEqual(2);
  })

});