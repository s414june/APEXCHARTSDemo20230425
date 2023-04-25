
var options_tree = {
    series: [
        {
            name: '品牌NK',
            data: [
                {
                    x: 'PEG39',
                    y: 12000
                },
                {
                    x: 'PEG40',
                    y: 12000
                },
                {
                    x: 'AIR MAX',
                    y: 1120
                }
            ]
        },
        {
            name: '品牌CN',
            data: [
                {
                    x: '型體1',
                    y: 13000
                },
                {
                    x: '型體2',
                    y: 13000
                }
            ]
        },
        {
            name: '品牌ON',
            data: [
                {
                    x: '型體4',
                    y: 10000
                }
            ]
        }
    ],
    legend: {
        show: true
    },
    chart: {
        height: 350,
        width: 500,
        type: 'treemap',
    },
    dataLabels: {
        // enabled: false
        style: {
            colors: ['#414141']
        },
        formatter: function (val, opt) {
            return val + ":" + opt.value
        },
    },
    title: {
        text: 'Treemap',
        // align: 'center'
    }
};

var chart_tree = new ApexCharts(document.querySelector("#chart_tree"), options_tree);
chart_tree.render();