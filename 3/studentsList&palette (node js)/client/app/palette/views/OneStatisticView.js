function OneStatisticsView (color) {
    var el = document.createElement('p');

    color.on('statistics request', refreshStatistics);

    this.render = function () {
        refreshStatistics();

        return el;
    };

    function refreshStatistics () {
        el.innerHTML = statisticsTpl.replacer(statisticsTpl.addStatistics, color.toJSON());
    }
}