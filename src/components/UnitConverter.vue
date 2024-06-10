<template>
  <v-container>
    <p
      style="
        font-weight: 800;
        font-size: 34px;
        line-height: 32px;
        color: #505781;
        margin-top: 10px;
        padding-top: 10px;
      "
    >
      Unit Converter
    </p>
    <v-row>
      <v-col class="col-md-6 col-12">
        <div class="unitConvertor font-weight-bold">
          <!-- <div class="unit-converter-flex">
            <div
              v-for="item in ropaniItems"
              :key="item.label"
              class="unit-converter-form-item"
            >
              <span>{{ item.label }}</span>
              <div>
                <v-text-field
                  placeholder="0"
                  type="number"
                  v-model="item.value"
                ></v-text-field>
              </div>
            </div>
          </div>
          <div class="unit-converter-flex" style="margin-top: 20px">
            <div
              v-for="item in bighaItems"
              :key="item.label"
              class="unit-converter-form-item"
            >
              <span>{{ item.label }}</span>
              <div>
                <v-text-field
                  placeholder="0"
                  type="number"
                  v-model="item.value"
                ></v-text-field>
              </div>
            </div>
          </div>
          <div class="unit-converter-flex" style="margin-top: 20px">
            <div
              v-for="item in sqFeetItems"
              :key="item.label"
              class="unit-converter-form-item"
            >
              <span>{{ item.label }}</span>
              <div>
                <v-text-field
                  placeholder="0"
                  type="number"
                  v-model="item.value"
                ></v-text-field>
              </div>
            </div>
          </div>-->
          <div class="unit-converter-flex">
            <div class="unit-converter-form-item">
              <span>Ropani:</span>
              <v-text-field
                type="number"
                v-model="inputValues[`Ropani`]"
                @input="convert(`Ropani`)"
              />
            </div>
            <div class="unit-converter-form-item">
              <span>Anna:</span>
              <v-text-field
                class="unit-converter-form-item"
                type="number"
                v-model="inputValues[`Anna`]"
                @input="convert(`Anna`)"
              />
            </div>
            <div class="unit-converter-form-item">
              <span>Paisa:</span>
              <v-text-field
                class="unit-converter-form-item"
                type="number"
                v-model="inputValues[`Paisa`]"
                @input="convert(`Paisa`)"
              />
            </div>
            <div class="unit-converter-form-item">
              <span>Daam:</span>
              <v-text-field
                class="unit-converter-form-item"
                type="number"
                v-model="inputValues[`Daam`]"
                @input="convert(`Daam`)"
              />
            </div>
          </div>
          <div class="unit-converter-flex">
            <div class="unit-converter-form-item">
              <span>Bigha:</span>
              <v-text-field
                class="unit-converter-form-item"
                type="number"
                v-model="inputValues[`Bigha`]"
                @input="convert(`Bigha`)"
              />
            </div>
            <div class="unit-converter-form-item">
              <span>Kattha:</span>
              <v-text-field
                class="unit-converter-form-item"
                type="number"
                v-model="inputValues[`Kattha`]"
                @input="convert(`Kattha`)"
              />
            </div>
            <div class="unit-converter-form-item">
              <span>Dhur:</span>
              <v-text-field
                class="unit-converter-form-item"
                type="number"
                v-model="inputValues[`Dhur`]"
                @input="convert(`Dhur`)"
              />
            </div>
          </div>
          <div class="unit-converter-flex">
            <div class="unit-converter-form-item">
              <span>Sq. Feet:</span>
              <v-text-field
                class="unit-converter-form-item"
                type="number"
                v-model="inputValues[`Square Feet`]"
                @input="convert(`Square Feet`)"
              />
            </div>
            <div class="unit-converter-form-item">
              <span>Sq. Meter:</span>
              <v-text-field
                class="unit-converter-form-item"
                type="number"
                v-model="inputValues[`Square Meter`]"
                @input="convert(`Square Meter`)"
              />
            </div>
          </div>
          <v-container
            class="unit-converter-info-card-container"
            style="margin-top: 20px"
          >
            <v-row>
              <v-col
                v-for="item in infoCards"
                :key="item.title"
                class="info-card"
                cols="12"
                sm="4"
              >
                <h2 class="unit-converter-info-card-title">{{ item.title }}</h2>
                <span class="info-card-body">{{ item.description }}</span>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>
      <v-col class="col-md-6 col-12">
        <div class="info-container">
          <div class="unit-converter-col" style="margin-bottom: 10px">
            <span class="unit-converter-info-title"
              >Unit Information at a glance</span
            >
            <span class="unit-converter-subtitle">(Hilly Area)</span>
          </div>
          <div>
            <div class="unit-converter-row">
              <v-select
                v-model="selectedHillyUnit"
                :items="hillyUnits"
              ></v-select>
              <span>is equivalent to:</span>
            </div>
            <div class="unit-converter-flex">
              <div
                v-for="item in filteredHillyEqui"
                :key="item.measure"
                class="unit-converter-unit-info-card"
              >
                <span class="font-weight">{{ item.value }}</span>
                <span>{{ item.measure }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="info-container">
          <div class="unit-converter-col" style="margin-bottom: 10px">
            <span class="unit-converter-info-title"
              >Unit Information at a glance</span
            >
            <span class="unit-converter-subtitle">(Terai Area)</span>
          </div>
          <div>
            <div class="unit-converter-row">
              <v-select
                v-model="selectedTeraiUnit"
                :items="teraiUnits"
              ></v-select>
              <span>is equivalent to:</span>
            </div>
            <div class="unit-converter-flex">
              <div
                v-for="item in filteredTeraiEqui"
                :key="item.measure"
                class="unit-converter-unit-info-card"
              >
                <span class="font-weight">{{ item.value }}</span>
                <span>{{ item.measure }}</span>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UnitConverter",
  data() {
    return {
      selectedHillyUnit: "1 Ropani",
      selectedTeraiUnit: "1 Bigha",
      hillyUnits: ["1 Ropani", "1 Anna", "1 Paisa", "1 Daam"],
      teraiUnits: ["1 Bigha", "1 Kattha", "1 Dhur"],

      inputValues: {
        Ropani: 0,
        Anna: 0,
        Paisa: 0,
        Daam: 0,
        Bigha: 0,
        Kattha: 0,
        Dhur: 0,
        "Square Feet": 0,
        "Square Meter": 0,
      },
      outputValues: {
        Ropani: null,
        Bigha: null,
        Kattha: null,
        "Square Feet": null,
        "Square Meter": null,
      },
      conversions: {
        Ropani: { "Square Feet": 74 * 74, "Square Meter": 508.73 },
        Anna: { "Square Feet": 342.25, "Square Meter": 31.8 },
        Paisa: { "Square Feet": 85.56, "Square Meter": 7.95 },
        Daam: { "Square Feet": 21.39, "Square Meter": 1.99 },
        Bigha: { "Square Feet": 72900, "Square Meter": 6772.63 },
        Kattha: { "Square Feet": 3645, "Square Meter": 338.63 },
        Dhur: { "Square Feet": 182.25, "Square Meter": 16.93 },
        "Square Feet": { "Square Meter": 1 / 10.764 },
        "Square Meter": { "Square Feet": 10.764 },
      },
      infoCards: [
        {
          title: "1 Ropani",
          description: "equals to 74 feet x 74 feet",
        },
        {
          title: "1 Bigha",
          description: "equals to 13 Ropani",
        },
        {
          title: "1 Kattha",
          description: "equals to 442 sq. yards or 338 sq. meters",
        },
      ],
      hillyEqui: [
        {
          "1 Ropani": [
            { value: 16, measure: "Anna" },
            { value: 64, measure: "Paisa" },
            { value: 256, measure: "Daam" },
            { value: 508.72, measure: "Mtr.Sqr." },
            { value: 5476, measure: "Sq.Feet" },
          ],
        },
        {
          "1 Anna": [
            { value: 4, measure: "Paisa" },
            { value: 16, measure: "Daam" },
            { value: 31.8, measure: "Mtr.Sqr." },
            { value: 342.25, measure: "Sq.Feet" },
          ],
        },
        {
          "1 Paisa": [
            { value: 4, measure: "Daam" },
            { value: 7.95, measure: "Mtr.Sqr." },
            { value: 85.56, measure: "Sq.Feet" },
          ],
        },
        {
          "1 Daam": [
            { value: 1.99, measure: "Mtr. Sqr." },
            { value: 21.39, measure: "Sq. Feet" },
          ],
        },
      ],
      teraiEqui: [
        {
          "1 Bigha": [
            { value: 20, measure: "Kattha" },
            { value: 6772.63, measure: "Mtr. Sqr." },
            { value: 72900, measure: "Sq. Feet" },
            { value: 13.31, measure: "Ropani" },
          ],
        },
        {
          "1 Kattha": [
            { value: 20, measure: "Dhur" },
            { value: 338.63, measure: "Mtr. Sqr." },
            { value: 3645, measure: "Sq. Feet" },
          ],
        },
        {
          "1 Dhur": [
            { value: 16.93, measure: "Mtr. Sqr." },
            { value: 182.25, measure: "Sq. Feet" },
          ],
        },
      ],
    };
  },
  watch: {},
  methods: {
    convert(changedUnit) {
      for (const unit of this.units) {
        if (["Square Feet", "Square Meter"].includes(unit)) {
          if (["Ropani", "Anna", "Paisa", "Daam"].includes(changedUnit)) {
            this.inputValues[unit] = (
              this.inputValues["Ropani"] * this.conversions["Ropani"][unit] +
              this.inputValues["Anna"] * this.conversions["Anna"][unit] +
              this.inputValues["Paisa"] * this.conversions["Paisa"][unit] +
              this.inputValues["Daam"] * this.conversions["Daam"][unit]
            ).toFixed(2);
            this.updateTeraiItems();
          } else if (["Bigha", "Kattha", "Dhur"].includes(changedUnit)) {
            this.inputValues[unit] = (
              this.inputValues["Bigha"] * this.conversions["Bigha"][unit] +
              this.inputValues["Kattha"] * this.conversions["Kattha"][unit] +
              this.inputValues["Dhur"] * this.conversions["Dhur"][unit]
            ).toFixed(2);
            this.updateHillItems();
          } else {
            if (unit !== changedUnit) {
              const inputValue = this.inputValues[changedUnit];
              const conversionValue = this.conversions[changedUnit][unit];
              this.inputValues[unit] = inputValue * conversionValue;
            }
            this.updateHillItems();
            this.updateTeraiItems();
          }
        }
      }
    },
    updateHillItems() {
      this.inputValues["Daam"] = (
        (this.inputValues["Square Feet"] /
          this.conversions["Daam"]["Square Feet"]) %
        4
      ).toFixed(3);
      this.inputValues["Paisa"] = (
        (this.inputValues["Square Feet"] /
          this.conversions["Paisa"]["Square Feet"]) %
        4
      ).toFixed(2);
      this.inputValues["Anna"] = (
        (this.inputValues["Square Feet"] /
          this.conversions["Anna"]["Square Feet"]) %
        16
      ).toFixed(2);
      this.inputValues["Ropani"] = (
        this.inputValues["Square Feet"] /
        this.conversions["Ropani"]["Square Feet"]
      ).toFixed(2);
    },
    updateTeraiItems() {
      this.inputValues["Dhur"] = (
        (this.inputValues["Square Feet"] /
          this.conversions["Dhur"]["Square Feet"]) %
        20
      ).toFixed(3);
      this.inputValues["Kattha"] = (
        (this.inputValues["Square Feet"] /
          this.conversions["Kattha"]["Square Feet"]) %
        20
      ).toFixed(2);
      this.inputValues["Bigha"] = (
        this.inputValues["Square Feet"] /
        this.conversions["Bigha"]["Square Feet"]
      ).toFixed(2);
    },
  },
  computed: {
    units() {
      return Object.keys(this.inputValues);
    },
    filteredTeraiEqui() {
      const selectedOption = this.selectedTeraiUnit;
      const selectedItem = this.teraiEqui.find(
        (item) => Object.keys(item)[0] === selectedOption
      );
      if (selectedItem) {
        return selectedItem[selectedOption];
      } else {
        return [];
      }
    },
    filteredHillyEqui() {
      const selectedOption = this.selectedHillyUnit;
      const selectedItem = this.hillyEqui.find(
        (item) => Object.keys(item)[0] === selectedOption
      );
      if (selectedItem) {
        return selectedItem[selectedOption];
      } else {
        return [];
      }
    },
  },
};
</script>

<style scoped>
.content-primary {
  margin-top: 20px;
}

.section {
  margin-top: 20px;
}

.unitConvertor {
  margin-top: 20px;
}

.unit-converter-flex {
  display: flex;
  flex-direction: row;
}
@media (max-width: 767px) {
  .info-container .unit-converter-flex {
    display: flex !important;
    flex-wrap: wrap;
    grid-gap: 4px;
  }
}

.unit-converter-form-item {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  gap: 10px;
  flex: 0.25 1;
}

.unit-converter-info-card-container {
  display: flex;
  flex-direction: row;
  flex: 1 1;
}

.info-card {
  padding: 20px;
  align-items: center;
  text-align: center;
  color: #0e5dae;
  cursor: pointer;
  outline: 1px solid hsla(0, 0%, 74%, 0.72);
}

.unit-converter-info-card-title {
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: #0e5dae;
}

.info-card-body {
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  color: #969696;
}

.info-container {
  background: hsla(0, 0%, 95%, 0.51);
  padding: 30px;
  margin-bottom: 20px;
}
@media (max-width: 767px) {
  .info-container {
    padding: 24px !important;
  }
}
.unit-converter-col {
  display: flex;
  flex-direction: column;
}

.unit-converter-info-title {
  font-size: 18px;
  font-weight: 800;
}

.unit-converter-subtitle {
  font-size: 16px;
  font-weight: 400;
}

.unit-converter-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.unit-converter-info-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: #565656;
  cursor: pointer;
}

.font-weight {
  font-weight: 600;
}

.unit-converter {
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
}

.unit-converter-unit-info-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: #565656;
  cursor: pointer;
}
span {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 2px;
  display: inline-block;
}
.unit-converter-row > span {
  white-space: nowrap;
}
.unit-converter-unit-info-card span {
  white-space: nowrap;
}
</style>
