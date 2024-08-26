// Bar Chart
const ctxBar = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
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
});

// Pie Chart
const ctxPie = document.getElementById("pieChart").getContext("2d");
const pieChart = new Chart(ctxPie, {
  type: "pie",
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Colors",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});

// Line Chart
const ctxLine = document.getElementById("lineChart").getContext("2d");
const lineChart = new Chart(ctxLine, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Temperature",
        data: [30, 25, 20, 15, 10, 5],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
});

// Animate Bar Chart
anime({
  targets: barChart.data.datasets[0].data,
  easing: "easeInOutQuad",
  duration: 2000,
  delay: anime.stagger(100),
  direction: "alternate",
  loop: true,
});

// Animate Pie Chart
anime({
  targets: pieChart.data.datasets[0].data,
  easing: "easeInOutExpo",
  duration: 2000,
  delay: anime.stagger(100),
  scale: 1.2,
  loop: true,
});

// Animate Line Chart
anime({
  targets: lineChart.data.datasets[0].data,
  easing: "easeOutElastic(1, .8)",
  duration: 3000,
  delay: anime.stagger(100),
  loop: true,
});
