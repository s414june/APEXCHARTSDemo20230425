var options_heat = {
    series: [{
        name: '品牌RBK',
        data: generateData(4, {
            min: 0,
            max: 10
        })
    },
    {
        name: '品牌ON',
        data: generateData(4, {
            min: 0,
            max: 10
        })
    },
    {
        name: '品牌AD',
        data: generateData(4, {
            min: 0,
            max: 10
        })
    },
    {
        name: '品牌CN',
        data: generateData(4, {
            min: 0,
            max: 10
        })
    },
    {
        name: '品牌NK',
        data: generateData(4, {
            min: 0,
            max: 10
        })
    }
    ],
    chart: {
        height: 350,
        width: 800,
        type: 'heatmap',
    },
    plotOptions: {
        heatmap: {
            // shadeIntensity: 0.5,
            // radius: 0,
            // useFillColorAsStroke: true,
            // reverseNegativeShade: true,
            colorScale: {
                ranges: [{
                    from: 0,
                    to: 3,
                    name: 'low',
                    color: '#ffef62'
                },
                {
                    from: 3,
                    to: 6,
                    name: 'medium',
                    color: '#ffc062'
                },
                {
                    from: 6,
                    to: 9,
                    name: 'high',
                    color: '#ff8e62'
                },
                {
                    from: 9,
                    to: 11,
                    name: 'extreme',
                    color: '#ff6262'
                }
                ]
            }
        }
    },
    xaxis: {
        categories: [202211, 202212, 202301, 202302],
    },
    dataLabels: {
        // enabled: false
        style: {
            colors: ['#414141']
        }
    },
    // colors: ["#ff3c3c"],
    title: {
        text: 'HeatMap Chart'
    },
};

var chart_heat = new ApexCharts(document.querySelector("#chart_heat"), options_heat);
chart_heat.render();