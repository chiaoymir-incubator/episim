
const initial_data = {
    labels: [],
    datasets: [
        {
            label: 'infected',
            data: [],
            backgroundColor: [
                'rgba(255, 127, 102, 1)'
            ],
            borderColor: [
                'rgba(255, 127, 102, 1)'
            ],
            borderWidth: 1,
            fill: true
        },
        {
            label: 'susceptible',
            data: [],
            backgroundColor: [
                'rgba(0, 191, 255, 1)'
            ],
            borderColor: [
                'rgba(0, 191, 255, 1)'
            ],
            borderWidth: 1,
            fill: true
        },
        {
            label: 'removed',
            data: [],
            backgroundColor: [
                // 'rgba(135, 135, 135, 1)'
                'rgba(102, 102, 102, 1)'
            ],
            borderColor: [
                'rgba(102, 102, 102, 1)'
            ],
            borderWidth: 1,
            fill: true
        }
    ]
}


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: JSON.parse(JSON.stringify(initial_data)),
    options: {
        scales: {
            y: {
                beginAtZero: true,
                stacked: true

            }
        }
    }
});

function resetMyChartToInitial(){
    myChart.data = JSON.parse(JSON.stringify(initial_data))
    myChart.update();
}