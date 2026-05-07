import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
    it("should decrease the expiresIn by one and benefit by 2", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 9, 8)],
    );
  });
});
