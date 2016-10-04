function Color (_color) {
    var color = _color,
        counter = 0;

    this.getColor = function () {
        return color;
    };

    this.getCounter = function () {
        return counter;
    };

    this.increaseCounter = function () {
        counter++;
    };

    this.toJSON = function () {
        return {
            color: color,
            counter: counter
        };
    };
}