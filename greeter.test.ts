import { Greeter } from "./greeter";
describe("Greeter Tests", () => {
  test(`Hello and Martin is Hello, Martin!`, () => {
    let newGreeter = new Greeter("Hello");
    expect(newGreeter.greet("Martin")).toBe("Hello, Martin!");
  });
  test(`Hi and Sofia is Hi, Sofia!`, () => {
    let newGreeter = new Greeter("Hi");
    expect(newGreeter.greet("Sofia")).toBe("Hi, Sofia!");
  });
});
