var options_grid_1 = {
    series: [{
        data: [12000, 2095, 2999]
    }],
    chart: {
        type: 'bar',
        height: 200,
        width: 200,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            barHeight: '70%',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
        }
    },
    colors: ['#00A2E8', '#22B14C', '#FF7F27'],
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#414141']
        },
        // formatter: function (val, opt) {
        //     return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
        // },
        offsetX: 0,
        // dropShadow: {
        //     enabled: true
        // }
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    xaxis: {
        categories: ['Max', '預計', '實際'],
    },
    // yaxis: {
    //     labels: {
    //         show: false
    //     }
    // },
    title: {
        text: '202301',
        align: 'center',
        floating: true
    },
    tooltip: {
        theme: 'dark',
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        }
    },
    legend: {
        show: false
    }
};

var chart_grid_1 = new ApexCharts(document.querySelector("#chart_grid_1"), options_grid_1);
chart_grid_1.render();

options_grid_1.series[0].data = [10000, 9595, 3500];
options_grid_1.title.text = "";
var chart_grid_2 = new ApexCharts(document.querySelector("#chart_grid_2"), options_grid_1);
chart_grid_2.render();

options_grid_1.series[0].data = [15015, 8595, 4703];
var chart_grid_3 = new ApexCharts(document.querySelector("#chart_grid_3"), options_grid_1);
chart_grid_3.render();

options_grid_1.series[0].data = [12000, 8595, 3500];
options_grid_1.title.text = "202302";
var chart_grid_4 = new ApexCharts(document.querySelector("#chart_grid_4"), options_grid_1);
chart_grid_4.render();

options_grid_1.title.text = "";
var chart_grid_5 = new ApexCharts(document.querySelector("#chart_grid_5"), options_grid_1);
chart_grid_5.render();

var chart_grid_6 = new ApexCharts(document.querySelector("#chart_grid_6"), options_grid_1);
chart_grid_6.render();

options_grid_1.title.text = "202302";
var chart_grid_7 = new ApexCharts(document.querySelector("#chart_grid_7"), options_grid_1);
chart_grid_7.render();

options_grid_1.title.text = "";
var chart_grid_8 = new ApexCharts(document.querySelector("#chart_grid_8"), options_grid_1);
chart_grid_8.render();

var chart_grid_9 = new ApexCharts(document.querySelector("#chart_grid_9"), options_grid_1);
chart_grid_9.render();

