import { StrengthPipe } from "./strength.pipe";

describe('Srength Pipe',() => {
  let srengthPipe: StrengthPipe;

  beforeEach(() => {
    // arrange
    srengthPipe  =  new StrengthPipe();
  });

  it('should return weak if strength is 5',()=>{
    // act
    const result = srengthPipe.transform(5);

    //assert
    expect(result).toBe('5 (weak)');
  })

  it('should return strong if strength is 10',()=>{
    // act
    const result = srengthPipe.transform(10);

    //assert
    expect(result).toBe('10 (strong)');
  })

  it('should return unbelievable if strength is 255',()=>{
    // act
    const result = srengthPipe.transform(255);

    //assert
    expect(result).toBe('255 (unbelievable)');
  })
})
