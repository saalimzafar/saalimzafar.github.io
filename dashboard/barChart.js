document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("barChart").getContext("2d");
  const barChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["A", "B", "C", "D", "E"],
      datasets: [
        {
          label: "Bar Chart Data",
          data: [50, 120, 190, 30, 100],
          backgroundColor: "rgba(155, 89, 182, 0.6)",
          borderColor: "rgba(155, 89, 182, 1)",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
