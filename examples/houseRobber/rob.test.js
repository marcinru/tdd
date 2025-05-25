import { rob } from "./rob.js";

describe("rob", () => {
  it("returns 4 for nums=[1,2,3,1]", () => {
    expect(rob([1, 2, 3, 1])).toBe(4);
  });

  it("returns 12 for nums=[2,7,9,3,1]", () => {
    expect(rob([2, 7, 9, 3, 1])).toBe(12);
  });

  it("returns 4 for nums=[2,1,1,2]", () => {
    expect(rob([2, 1, 1, 2])).toBe(4);
  });
});
