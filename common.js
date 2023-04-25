
function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y =
            (Math.random() * (yrange.max - yrange.min + 1)).toFixed(1) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}