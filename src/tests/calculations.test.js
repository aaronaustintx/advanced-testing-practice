import {add, subtract, multiply,divide} from "../services/calculations";


describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("5 minuses 4 should equal 1", () => {
    expect(subtract(5, 4)).toBe(1);
  });
});

describe("multiply", () => {
  it("4 multiplied by 2 should equal 8", () => {
    expect(multiply(4, 5)).toBe(20);
  });
});

describe("divide", () => {
  it("100 divided by 4 should equal 25", () => {
    expect(divide(100, 4)).toBe(25);
  });
});
