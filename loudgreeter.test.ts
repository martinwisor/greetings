import { LoudGreeter } from "./loudgreeter";
describe("Loud Greeter Tests", ()=>{
  test('Hello and Martin is Hello, Martin!!!', ()=>
  {
    let loudGreet = new LoudGreeter("Hello");
    loudGreet.addVolume();
    expect(loudGreet.greet("Martin")).toBe("Hello, Martin!!!")
  })
  test('Hello and Sofia is Hello, Sofia!!', ()=>{
    let loudGreet = new LoudGreeter("Hello");
    expect(loudGreet.greet("Sofia")).toBe("Hello, Sofia!!")
  })
  test("Hello and Theo is Hello, Theo!!!!", ()=>{
    let loudGreet = new LoudGreeter("Hello");
    loudGreet.addVolume();
    loudGreet.addVolume();
    expect(loudGreet.greet("Theo")).toBe("Hello, Theo!!!!")
  })
})