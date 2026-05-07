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

      if (["Herbal Tea", "Fervex"].includes(this.drugs[i].name)) {
        //TODO: this must be entirelly skipped if benefit + 1 > 50
        if (this.drugs[i].benefit < 50) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == "Fervex" && this.drugs[i].expiresIn < 11) {
            if (this.drugs[i].benefit < 50) {
              this.drugs[i].benefit = this.drugs[i].benefit + 1;
            }
            if (this.drugs[i].expiresIn < 6 && this.drugs[i].benefit < 50) {
              this.drugs[i].benefit = this.drugs[i].benefit + 1;
            }
          }
        }
      } else if (this.drugs[i].benefit > 0) {
        this.drugs[i].benefit = this.drugs[i].benefit - 1;
      }

      this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;

      if (this.drugs[i].expiresIn < 0) {
        if(this.drugs[i].name === "Herbal Tea") {
            if(this.drugs[i].benefit < 50)
              this.drugs[i].benefit = this.drugs[i].benefit + 1;
            continue;
        }
        if (this.drugs[i].name != "Fervex" && this.drugs[i].benefit > 0) {
              this.drugs[i].benefit = this.drugs[i].benefit - 1;
        } else {
          this.drugs[i].benefit = 0;
        }
      }

    }

    return this.drugs;
  }
}
