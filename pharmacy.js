export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name === "Magic Pill") {
        continue;
      }

      this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;

      if (this.drugs[i].name === "Fervex") {
        if (this.drugs[i].expiresIn < 0) {
          this.drugs[i].benefit = 0;
          continue;
        }
        if (this.drugs[i].expiresIn < 5) {
          this.drugs[i].benefit = Math.min(this.drugs[i].benefit + 3, 50);
          continue;
        }
        if (this.drugs[i].expiresIn < 10) {
          this.drugs[i].benefit = Math.min(this.drugs[i].benefit + 2, 50);
          continue;
        }
        this.drugs[i].benefit = Math.min(this.drugs[i].benefit + 1, 50);
        continue;
      } else if (this.drugs[i].name === "Herbal Tea") {
        if (this.drugs[i].expiresIn < 0) {
          this.drugs[i].benefit = Math.min(this.drugs[i].benefit + 2, 50);
        } else {
          this.drugs[i].benefit = Math.min(this.drugs[i].benefit + 1, 50);
        }
      } else if (this.drugs[i].name === "Dafalgan") {
        this.drugs[i].benefit = Math.max(this.drugs[i].benefit - 2, 0);
      } else {
        this.drugs[i].benefit = Math.max(
          this.drugs[i].benefit - (this.drugs[i].expiresIn < 0 ? 2 : 1),
          0,
        );
      }
    }

    return this.drugs;
  }
}
