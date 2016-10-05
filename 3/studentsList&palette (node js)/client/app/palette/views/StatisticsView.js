function StatisticsView (colorsCollection) {
    var el = document.createElement('div');

    /*mediator.sub('statistics request', refresh);

    this.render = function () {
        el.innerHTML = statisticsTpl.addStatistics;
        return el;
    };

    function refresh (color) {
        el.innerHTML = statisticsTpl.replacer(el.innerHTML, color);
    }*/
    this.render = function () {
        var fragment = document.createDocumentFragment(),
            oneStatistic;

        el.innerHTML = '<h2>Statistics</h2>';

        colorsCollection.forEach(function (color) {
            oneStatistic = new OneStatisticsView(color);

            fragment.appendChild(oneStatistic.render());
        });
        el.appendChild(fragment);

        return el;
    };
}