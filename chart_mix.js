
var options_mix = {
    series: [{
        name: 'A',
        type: 'bar',
        data: [800000, 600000, 1000000, 850000, 650000]
    }, {
        name: 'B',
        type: 'bar',
        data: [800000, 600000, 1000000, 850000, 650000]
    }, {
        name: 'C',
        type: 'line',
        data: [630000, 220000, 800000, 750000, 580000]
    }, {
        name: 'D',
        type: 'line',
        data: [1200000, 530000, 1050000, 530000, 340000]
    }],
    chart: {
        height: 350,
        width: 800,
        type: 'bar',
        stacked: false,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1, 1, 3, 3],
        curve: 'straight'
    },
    markers: {
        size: 5,
        hover: {
            size: 9
        }
    },
    title: {
        text: 'Bar and line',
        align: 'left'
    },
    xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013],
    },
    yaxis: [
        {
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#ffee00'
            },
            labels: {
                style: {
                    colors: '#ffee00',
                    fontSize: '14px',
                }
            },
            // title: {
            //     text: "Income (thousand crores)",
            //     style: {
            //         color: '#fff784',
            //     }
            // },
            tooltip: {
                enabled: true
            }
        },
        {
            seriesName: 'Income',
            opposite: false,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#ffb30f'
            },
            labels: {
                style: {
                    colors: '#ffb30f',
                    fontSize: '14px',
                }
            },
            // title: {
            //     text: "Operating Cashflow (thousand crores)",
            //     style: {
            //         color: '#ffd884',
            //     }
            // },
        },
        {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#4cdb70'
            },
            labels: {
                style: {
                    colors: '#4cdb70',
                    fontSize: '14px',
                },
            },
            // title: {
            //     text: "Revenue (thousand crores)",
            //     style: {
            //         color: '#FEB019',
            //     }
            // }
        },
        {
            seriesName: 'D',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: true,
                color: '#ff6767'
            },
            labels: {
                style: {
                    colors: '#ff6767',
                    fontSize: '14px',
                },
            },
            // title: {
            //     text: "Revenue (thousand crores)",
            //     style: {
            //         color: '#FEB019',
            //     }
            // }
        },
    ],
    tooltip: {
        fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
        },
    },
    legend: {
        horizontalAlign: 'left',
        offsetX: 40
    },
    colors: ['#fff34e', '#ffcc5d', '#4cdb70', '#ff6767']
};

var chart_mix = new ApexCharts(document.querySelector("#chart_mix"), options_mix);
chart_mix.render();
