<template>
  <v-container class="container">
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
      EMI Calculator
    </p>
    <h2 class="my-4">Calculation Of EMI Loan</h2>
    <v-row class="loan-container">
      <v-col>
        <v-row>
          <v-col>
            <div class="input-container">
              <div id="row-inputs" class="form-row">
                <div class="form-item">
                  <v-label>Your Loan Amount</v-label>
                  <div>
                    <span>NRS.</span>
                    <v-text-field
                      placeholder="0"
                      type="number"
                      min="100000"
                      max="100000000"
                      step="10"
                      v-model="loanAmount"
                    ></v-text-field>
                  </div>
                </div>
                <div class="form-item">
                  <v-label>Interest Rate</v-label>
                  <div>
                    <v-text-field
                      placeholder="0"
                      type="number"
                      step="1"
                      min="2"
                      max="24"
                      v-model="interestRate"
                    ></v-text-field>
                    <span></span>%
                  </div>
                </div>
                <div class="form-item">
                  <v-label>Term Year</v-label>
                  <div>
                    <v-text-field
                      placeholder="0"
                      type="number"
                      step="1"
                      min="1"
                      max="30"
                      maxlength="2"
                      v-model="termYear"
                    ></v-text-field>
                    <span>YRS</span>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row>
              <v-col>
                <div class="container-row" style="margin-top: 20px">
                  <div
                    v-for="item in totalContainers"
                    :key="item.title"
                    class="total-container"
                  >
                    <p class="title">{{ item.title }}</p>
                    <p class="prefix">NRS</p>
                    <p class="value">{{ formatAmount(item.value) }}</p>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <div class="chart-container">
          <canvas id="myChart"></canvas>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <HomeLoanAmortizationTable
          :loanAmount="loanAmount"
          :termYears="termYear"
          :interestRate="interestRate"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chart from "chart.js/auto";
import HomeLoanAmortizationTable from "./HomeLoanAmortizationTable";
export default {
  name: "EMICalculator",
  components: {
    HomeLoanAmortizationTable,
  },
  data() {
    return {
      loanAmount: 30000,
      interestRate: 3,
      termYear: 4,
      totalInterest: 0,
      emi: 0,
      totalContainers: [
        {
          title: "Loan EMI",
          value: 0,
        },
        {
          title: "Total Interest",
          value: 0,
        },
        {
          title: "Total Payment",
          value: 0,
        },
      ],
      myChart: null,
    };
  },
  computed: {
    chartData() {
      return {
        type: "doughnut",
        data: {
          labels: ["Principal", "Interest"],
          datasets: [
            {
              label: "My First Dataset",
              data: [this.loanAmount, this.totalInterest],
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
        },
      };
    },
  },
  mounted() {
    const ctx = document.getElementById("myChart");
    this.myChart = new Chart(ctx, this.chartData);
  },
  watch: {
    loanAmount: "calculateDetails",
    interestRate: "calculateDetails",
    termYear: "calculateDetails",
    totalInterest() {
      this.updateChartData();
    },
  },
  created() {
    this.calculateDetails();
    this.updateChartData();
  },
  methods: {
    calculateDetails() {
      const loanAmount = parseFloat(this.loanAmount);
      const interestRate = parseFloat(this.interestRate);
      const termYear = parseFloat(this.termYear);

      // Calculate Loan EMI
      const monthlyInterestRate = interestRate / (12 * 100);
      const numPayments = termYear * 12;
      const emi =
        (loanAmount *
          monthlyInterestRate *
          (1 + monthlyInterestRate) ** numPayments) /
        ((1 + monthlyInterestRate) ** numPayments - 1);
      this.totalContainers[0].value = emi.toFixed(2);

      // Calculate Total Interest
      const totalInterest = emi * numPayments - loanAmount;
      this.totalInterest = totalInterest;
      this.totalContainers[1].value = totalInterest.toFixed(2);

      // Calculate Total Payment
      const totalPayment = emi * numPayments;
      this.totalContainers[2].value = totalPayment.toFixed(2);
    },
    updateChartData() {
      // Update the chart data
      this.myChart.data.datasets[0].data = [
        this.loanAmount,
        this.totalInterest,
      ];
      this.myChart.update();
    },
    formatAmount(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  margin: auto;
  height: 50vh;
  width: 35vw;
}
.container {
  max-width: 1300px;
  padding: 0 20px;
}
.loan-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  max-width: 1447px !important;
}
.input-container {
  display: flex;
  flex: 0.6 1;
  flex-direction: column;
}
.form-row {
  display: flex;
  flex-direction: row;
  flex: 1 1;
}
@media (max-width: 880px) {
  .form-row {
    flex-direction: column;
    gap: 10px;
  }
}

.form-item {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  gap: 10px;
  flex: 0.5 1 0%;
}
.form-item div {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
}
.form-item span {
  font-weight: 500;
  font-size: 13px;
  color: #000;
  margin-bottom: 0;
  white-space: nowrap;
}
.container-row {
  display: flex;
  flex-direction: row;
  flex: 1 1;
  justify-content: center;
}

.chart-container {
  flex: 0.4 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 30px;
  height: 250px;
}

.total-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  outline: 1px solid #e2e2e2;
  padding: 20px 36px;
}
.title {
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #0e5dae;
}
.prefix {
  white-space: nowrap;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  color: #acacac;
}
.value {
  white-space: nowrap;
  margin-top: -10px;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  color: #000;
}
</style>
