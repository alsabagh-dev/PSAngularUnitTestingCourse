import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe',() => {
  it('should display weak if strngth is 5', () => {
    // arrange
    const pipe = new StrengthPipe();
    // act
    const result: string = pipe.transform(5);
    // assert
    expect(result).toEqual('5 (weak)');
  })

  it('should display strong if strngth is 10', () => {
    // arrange
    const pipe = new StrengthPipe();
    // act
    const result: string = pipe.transform(10);
    // assert
    expect(result).toEqual('10 (strong)');
  })

  it('should display unbelievable if strngth is more than 20', () => {
    // arrange
    const pipe = new StrengthPipe();
    // act
    const result: string = pipe.transform(22);
    // assert
    expect(result).toEqual('22 (unbelievable)');
  })
});
