<template>
  <div class="table-container">
    <h3 class="my-3">Home Loan Amortization Table</h3>

    <v-data-table
      :headers="mainTableHeaders"
      :items="amortizationData"
      item-key="year"
      hide-default-footer
      class="elevation-1 styled-table"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-icon
              @click="toggleNestedTable(item)"
              style="color: #0e5dae"
              :class="{ 'rotate-icon': item.showNestedTable }"
            >
              {{
                item.showNestedTable ? "mdi-chevron-down" : "mdi-chevron-right"
              }}
            </v-icon>
          </td>
          <td>{{ item.year }}</td>
          <td>{{ item.principal }}</td>
          <td>{{ item.interest }}</td>
          <td>{{ item.remaining }}</td>
        </tr>
        <tr v-show="item.showNestedTable">
          <td colspan="5">
            <v-data-table
              :headers="nestedTableHeaders"
              :items="item.monthlyData"
              hide-default-footer
              disable-pagination
              class="elevation-1 table-header-row"
            ></v-data-table>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  name: "HomeLoanAmortizationTable",
  props: {
    loanAmount: {
      type: Number,
      required: true,
    },
    termYears: {
      type: Number,
      required: true,
    },
    interestRate: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      mainTableHeaders: [
        { text: "", value: "toggle", sortable: false },
        { text: "Year", value: "year" },
        { text: "Principal", value: "principal" },
        { text: "Interest", value: "interest" },
        { text: "Remaining", value: "remaining" },
      ],
      nestedTableHeaders: [
        { text: "Month", value: "month" },
        { text: "Principal", value: "principal" },
        { text: "Interest", value: "interest" },
        { text: "Remaining", value: "remaining" },
      ],
      amortizationData: [],
    };
  },
  watch: {
    interestRate() {
      this.calculateAmortizationData();
    },
    termYears() {
      this.calculateAmortizationData();
    },
    loanAmount() {
      this.calculateAmortizationData();
    },
  },
  created() {
    this.calculateAmortizationData();
  },
  methods: {
    toggleNestedTable(item) {
      item.showNestedTable = !item.showNestedTable;
    },
    calculateAmortizationData() {
      const monthlyInterestRate = this.interestRate / 1200;
      const totalMonths = this.termYears * 12;
      const monthlyPayment =
        (this.loanAmount * monthlyInterestRate) /
        (1 - 1 / Math.pow(1 + monthlyInterestRate, totalMonths));
      let remainingBalance = this.loanAmount;
      this.amortizationData = [];
      let previousBalance = 0;
      for (let year = 1; year <= this.termYears; year++) {
        let principal = 0;
        let interest = 0;
        let period = 1;

        const monthlyData = [];

        for (let month = 1; month <= 12; month++) {
          period = (year - 1) * 12 + month;
          const monthlyInterest = this.calculateMonthlyInterest(
            monthlyInterestRate,
            period,
            totalMonths,
            this.loanAmount
          );
          const monthPrincipal = this.calculateMonthlyPrincipal(
            monthlyPayment,
            monthlyInterest
          );
          previousBalance = monthPrincipal + previousBalance;
          remainingBalance = this.loanAmount - previousBalance;
          principal += monthPrincipal;
          interest += monthlyInterest;

          monthlyData.push({
            month,
            principal: monthPrincipal.toFixed(2),
            interest: monthlyInterest.toFixed(2),
            remaining: remainingBalance.toFixed(2),
          });
        }
        this.amortizationData.push({
          year,
          principal: principal.toFixed(2),
          interest: interest.toFixed(2),
          remaining: remainingBalance.toFixed(2),
          showNestedTable: false,
          monthlyData,
        });
      }
    },
    calculateMonthlyPrincipal(monthlyPayment, monthlyInterest) {
      return monthlyPayment - monthlyInterest > 0
        ? monthlyPayment - monthlyInterest
        : 0;
    },
    // calculateMonthlyInterest(monthlyInterestRate, remainingBalance) {
    //   return monthlyInterestRate * remainingBalance;
    // },

    calculateMonthlyInterest(rate, period, number_of_periods, present_value) {
      // Calculate interest payment formula
      let interestPayment =
        (rate *
          (present_value *
            (Math.pow(1 + rate, number_of_periods) -
              Math.pow(1 + rate, period - 1)))) /
        (Math.pow(1 + rate, number_of_periods) - 1);

      return interestPayment;
    },
  },
  computed: {
    // table() {
    //   const monthlyInterestRate = parseFloat(this.interestRate / 100 / 12);
    //   const totalPayments = parseFloat(this.termYears * 12);
    //   const principal = parseFloat(this.loanAmount);
    //   let remainingBalance = parseFloat(principal);
    //   const table = [];
    //   for (let year = 1; year <= this.termYears; year++) {
    //     let interestYearly = parseFloat(0);
    //     let principalYearly = parseFloat(0);
    //     for (let month = 1; month <= 12; month++) {
    //       const interestPayment = parseFloat(
    //         remainingBalance * monthlyInterestRate
    //       );
    //       const principalPayment = parseFloat(principal / totalPayments);
    //       remainingBalance -= principalPayment;
    //       interestYearly += interestPayment;
    //       principalYearly += principalPayment;
    //     }
    //     table.push({
    //       year,
    //       interest: interestYearly.toFixed(2),
    //       principal: principalYearly.toFixed(2),
    //       remaining: remainingBalance.toFixed(2),
    //     });
    //   }
    //   return table;
    // },
  },
};
</script>
<style scoped>
.table-header {
  position: sticky;
  top: 0;
  background-color: #f0f7fe;
  align-items: center;
  font-weight: 300 !important;
  height: 50px;
}
.table-header-row {
  background-color: transparent !important;
  color: #0e5dae !important;
}
.table-row {
  cursor: pointer;
  text-align: center;
  border-bottom: 1px solid #ededed;
  height: 40px;
}
.table-year {
  display: flex;
  white-space: nowrap;
  font-weight: 700;
  color: #3694df;
  align-items: center;
}
.table-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
}
.styled-table {
  border-collapse: collapse;
  font-size: 0.9em;
  min-width: 95%;
}
.styled-table td {
  padding: 12px 15px;
}
</style>
