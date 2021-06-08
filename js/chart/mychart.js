
const initial_data = {
    labels: [],
    datasets: [
        {
            label: 'infected',
            data: [],
            backgroundColor: [
                'rgba(255, 127, 102, 0.7)'
            ],
            borderColor: [
                'rgba(255, 127, 102, 1)'
            ],
            mode:"hide",
            borderWidth: 1,
            fill: true
        },
        {
            label: 'susceptible',
            data: [],
            backgroundColor: [
                'rgba(0, 191, 255, 0.7)'
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
                'rgba(102, 102, 102, 0.7)'
            ],
            borderColor: [
                'rgba(102, 102, 102, 1)'
            ],
            borderWidth: 1,
            fill: true
        },
        {
            label: 'infected_truth',
            data: [],
            backgroundColor: [
                'rgba(255, 179, 102, 0.2)'
            ],
            borderColor: [
                'rgba(255, 77, 77, 1)'
            ],
            mode:"hide",
            borderWidth: 1,
            fill: true
        },
        {
            label: 'susceptible_truth',
            data: [],
            backgroundColor: [
                'rgba(0, 191, 255, 0.2)'
            ],
            borderColor: [
                'rgba(0, 191, 255, 1)'
            ],
            borderWidth: 1,
            fill: true
        },
        {
            label: 'removed_truth',
            data: [],
            backgroundColor: [
                // 'rgba(135, 135, 135, 1)'
                'rgba(102, 102, 102, 0.2)'
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

function btn_toggle_chart_stack_OnClick() {
    const btn = document.getElementById("btn_toggle_chart_stack")
    if (myChart.options.scales.y.stacked == false)
    {
        myChart.options.scales.y.stacked = true
        btn.innerHTML = "unstack"
    }else{
        myChart.options.scales.y.stacked = false
        btn.innerHTML = "stack"
    }
    myChart.update()
}