import { describe, it, expect } from "vitest";

// The Kata says you should write a function to convert from normal numbers to Roman Numerals
// 1	5	 10	 50	 100	500	1000
// I	V	 X	 L	 C	  D	  M

const convert = (number: number) => {
  if (number > 5 && number < 9) {
    const rest = number - 5;
    return "V" + "I".repeat(rest);
  }
  if (number === 5) return "V";
  if (number === 50) return "L";
  return "I";
};

describe("Roman numerals", () => {
  it("it should return 'V'", () => {
    //Arrange

    //Act
    const doConvert = convert(5);

    //Assert
    expect(doConvert).toBe("V");
  });

  it("it should return 'I'", () => {
    // Given

    // When
    const doConvert = convert(1);

    expect(doConvert).toBe("I");
  });

  it("it should return 'L'", () => {
    // Given

    // When
    const doConvert = convert(50);

    expect(doConvert).toBe("L");
  });

  it("it should return 'VI'", () => {
    // Given

    // When
    const doConvert = convert(6);

    expect(doConvert).toBe("VI");
  });
});

