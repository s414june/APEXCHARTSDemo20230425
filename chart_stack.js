

var options_stack = {
    series: [
        {
            name: '實際-可出貨量',
            group: 'out',
            data: [150, 125]
        },
        {
            name: '實際-NG量',
            group: 'out',
            data: [50, 26]
        },
        {
            name: '標準-總回缸數',
            group: 'back',
            data: [107, 99]
        },
        {
            name: '標準-生產數',
            group: 'produce',
            data: [100, 79]
        },
        {
            name: '標準-洗缸數',
            group: 'wash',
            data: [7, 8]
        },
        {
            name: '實際-總回缸數',
            group: 'wash_real',
            data: [19, 21]
        }
    ],
    chart: {
        type: 'bar',
        height: 350,
        width: 800,
        stacked: true,
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
            'J2-500KG',
            'J1-500KG',
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

var chart_stack = new ApexCharts(document.querySelector("#chart_stack"), options_stack);
chart_stack.render();

