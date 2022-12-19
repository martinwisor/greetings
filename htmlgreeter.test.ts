import { HtmlGreeter } from "./htmlgreeter";
describe("Html Greeter Tests", () => {
  test("Hello and Martin returns <h1>Hello, Martin</h1>", () => {
    let greeter = new HtmlGreeter("Hello", "h1");
    expect(greeter.greet("Martin")).toBe("<h1>Hello, Martin!</h1>");
  });
  test("Hello and Sofia returns <h1>Hello, Sofia!</h1>", () => {
    let greeter = new HtmlGreeter("Hello", "h3");
    expect(greeter.greet("Sofia")).toBe("<h3>Hello, Sofia!</h3>");
  });
  test("Hello and Theo returns <h1>Hello, Theo!</h1>", () => {
    let greeter = new HtmlGreeter("Hello");
    expect(greeter.greet("Theo")).toBe("<h1>Hello, Theo!</h1>");
  });
});
