

var options_grid_stack = {
    series: [
        {
            name: 'Max',
            group: 'out',
            data: [12000, 10000, 9595]
        },
        {
            name: '預計',
            group: 'out',
            data: [4703, 8595, 9015]
        },
        {
            name: '實際',
            group: 'out',
            data: [2095, 7595, 2999]
        }
    ],
    chart: {
        type: 'bar',
        height: 350,
        width: 800,
        stacked: false,
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    plotOptions: {
        bar: {
            horizontal: true
        }
    },
    xaxis: {
        categories: [
            'DHAA',
            'NDGA',
            'NTM2',
        ]
    },
    dataLabels: {
        style: {
            colors: ['#414141']
        }
    },
    fill: {
        opacity: 1,
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    },
    colors: ['#B5E61D', '#C3C3C3', '#C8BFE7', '#6A70CC', '#EFE4B0', '#FFAEC9', '#00A2E8', '#FFF200',
        '#22B14C'
    ],
    title: {
        text: 'Bar Stack'
    }
};

var chart_grid_stack = new ApexCharts(document.querySelector("#chart_grid_stack"), options_grid_stack);
chart_grid_stack.render();

