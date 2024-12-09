const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hola les saluda Cesar Mendoza Canales!");
  });
});
