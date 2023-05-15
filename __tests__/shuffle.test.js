const shuffle = require("../src/shuffle");

const testArray=[1,2,3,4,5,6,7,8,9,10]

describe("shuffle should...", () => {
  test('return an array with the same length', ()=>{
    let shuffledTest = shuffle(testArray)
    expect(shuffledTest.length).toBe(testArray.length)
  })
  
  test('shuffle items around', () => {
    let shuffledTest = shuffle(testArray)
    expect(shuffledTest).toBeTruthy
  })
});
  