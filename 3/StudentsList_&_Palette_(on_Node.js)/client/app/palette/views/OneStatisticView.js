function OneStatisticsView (color) {
    var el = document.createElement('p');

    color.on('statistics request', refreshStatistics);

    this.render = function () {
        refreshStatistics();

        return el;
    };

    function refreshStatistics () {
        el.innerHTML = statTpl.replacer(statTpl.addStat, color.toJSON());
    }
}