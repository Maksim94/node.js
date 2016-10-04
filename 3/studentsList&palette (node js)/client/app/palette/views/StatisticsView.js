function StatisticsView () {
    var el = document.createElement('div');

    mediator.sub('statistics request', refresh);

    this.render = function () {
        el.innerHTML = statisticsTpl.addStatistics;
        return el;
    };

    function refresh (color) {
        el.innerHTML = statisticsTpl.replacer(el.innerHTML, color);
    }
}