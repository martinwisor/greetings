import { JavaScriptGreeter } from "./javascriptgreeter";

describe("JavaScript Greeter Tests", () => {
  test("Hello and Martin returns console.log name", () => {
    let greeter = new JavaScriptGreeter("Hello");
    expect(greeter.greet("Martin")).toBe('console.log(\"Hello, Martin!\")');
  });

  test("Hello and Sofia returns console.log name", () => {
    let greeter = new JavaScriptGreeter("Hello");
    expect(greeter.greet("Sofia")).toBe('console.log(\"Hello, Sofia!\")');
  });
});
