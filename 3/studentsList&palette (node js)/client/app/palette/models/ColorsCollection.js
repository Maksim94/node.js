function ColorsCollection () {
    var colors = [
            new Color('red'),
            new Color('green'),
            new Color('blue')
        ];

/*    this.setColors = function (colorsArray) {
        colors = colorsArray;
    };*/

    this.forEach = function (iterator) {
		colors.forEach(iterator);
	};
}