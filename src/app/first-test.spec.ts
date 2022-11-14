describe('My First test', () => {
  // system under test
  let sut;

  // use beforeEach to reset the state
  beforeEach(()=>{
    // it will reset to empty object before each test.
    sut = {}
  });

  it('should return true if true', ()=>{
    // arange
    sut.a = false;

    //act
    sut.a = true;

    // assert
    expect(sut.a).toBe(true);
    // toBe is one of Jasmine matchers
    // https://jasmine.github.io/api/4.5/matchers
  })
})
