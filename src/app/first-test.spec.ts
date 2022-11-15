describe('My First test',() => {
  // system under test
  let sut;

  beforeEach(() => {
      sut = {}
  })

  it('should return true if true',() => {
    // AAA
    // arrange
    sut.a = false;

    // act
    sut.a = true;

    // assert
    expect(sut.a).toBe(true);
  });

  it('should return false if false',() => {
    // AAA
    // arrange
    sut.a = true;

    // act
    sut.a = false;

    // assert
    expect(sut.a).toBe(false);
  });

})
