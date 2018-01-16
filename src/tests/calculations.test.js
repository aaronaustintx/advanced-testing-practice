import {add, subtract, multiply,divide} from "../services/calculations";


describe("add", () => {
  it("should add 1 and 2 and return 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});

describe("subtract", () => {
  it("4 minuses 2 should equal 2", () => {
    expect(subtract(4, 2)).toBe(2);
  });
});

describe("multiply", () => {
  it("4 multiplied by 2 should equal 8", () => {
    expect(multiply(4, 2)).toBe(8);
  });
});

describe("divide", () => {
  it("12 divided by 4 should equal 3", () => {
    expect(divide(12, 4)).toBe(3);
  });
});
