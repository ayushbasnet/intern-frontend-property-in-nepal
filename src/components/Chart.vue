<template>
  <div>
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "PlanetChart",
  props: ["principal", "interest"],
  data() {
    return {
      myChart: {
        type: "doughnut",
        data: {
          labels: ["Principal", "Interest"],
          datasets: [
            {
              label: "My First Dataset",
              data: [this.principal, this.interest],
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      },
    };
  },
  mounted() {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, this.myChart);
  },
};
</script>
