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

  it("after 10 frames the game will end and the frame and ball will be reset to 1", function() {
    let bowling = new Bowling();
    function repeat(n, times) {
      let i = 0;
      while (i < times) {
        bowling.input_score(n);
        i++;
      }
    }
    repeat(3, 20);
    expect(bowling.frame).toEqual(1);
    expect(bowling.ball).toEqual(1);
  })

  it("a third ball is allowed on the final frame if it is a spare", function() {
    let bowling = new Bowling();
    function repeat(n, times) {
      let i = 0;
      while (i < times) {
        bowling.input_score(n);
        i++;
      }
    }
    repeat(5, 20);
    expect(bowling.frame).toEqual(10);
    expect(bowling.ball).toEqual(3);
  })

  it("should end the frame on a strike", function() {
    let bowling = new Bowling();
    bowling.input_score(10)
    expect(bowling.frame).toEqual(2);
  })

});