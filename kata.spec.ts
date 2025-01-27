import { describe, it, expect } from "vitest";

const kata = () => {
  return "Let's have fun with mob ";
};

describe("Guess nearest primary colors", () => {
  it("F00 nearest color is F00", () => {
    //Given

    //When
    const doKata = kata();

    //Then
    expect(doKata).toBeDefined();
  });
});
