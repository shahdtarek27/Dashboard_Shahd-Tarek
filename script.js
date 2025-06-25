
// 1. Weekly Activity - Bar Chart
const weeklyChart = new Chart(document.getElementById("weeklyChart"), {
  type: 'bar',
  data: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Collect',
        data: [80, 60, 70, 90, 40, 50, 30],
        backgroundColor: '#4CAF50', // أخضر
        borderSkipped: false,
        borderRadius: 30,
        // barThickness: 15,
        barPercentage: 0.65,
        categoryPercentage: 0.4,
      },
      {
        label: 'Refund',
        data: [40, 30, 50, 20, 70, 60, 20],
        backgroundColor: '#FC7900', // برتقالي
        borderSkipped: false,
        borderRadius: 30,
        // barThickness: 15,
        barPercentage: 0.65,
        categoryPercentage: 0.4,
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top'
      }
    },
    scales: {
      x: {
        // stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        // stacked: true,
        grid: {
          display: false,
        },
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20
        }
      }
    }
  }
});

// 2. Expense Statistics - Pie Chart
const pieChart = new Chart(document.getElementById("pieChart"), {
  type: 'pie',
  data: {
    labels: ['Others', 'Investment', 'Entertainment', 'Bill Expense'],
    datasets: [{
      data: [30, 15, 20, 35],
      backgroundColor: ['#3F51B5', '#E91E63', '#FF9800', '#9C27B0']
    }]
  },
  options: {
    responsive: true,

    plugins: {
      legend: false,
      tooltip: false,
      datalabels: {
        display: true,
        align: 'center',
        color: "#ffffff",
        font: {
          size: 18,
        },
        formatter: (value,) => {
          return value + '%';
        },
      },

    },
  },
  plugins: [ChartDataLabels]
},
);
// pieChart.register(ChartDataLabels);


// 3. Balance History - Line Chart
const ctx = document.getElementById("lineChart").getContext("2d");

// تدرج أخضر تحت الخط
const gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(76, 175, 80, 0.4)');
gradient.addColorStop(1, 'rgba(76, 175, 80, 0)');

const lineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [{
      label: 'Balance',
      data: [200, 300, 400, 800, 500, 700, 650],
      fill: true,
      backgroundColor: gradient,
      borderColor: '#4CAF50',
      tension: 0.4, // انحناء الخط
      pointRadius: 0 // إخفاء النقاط
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
