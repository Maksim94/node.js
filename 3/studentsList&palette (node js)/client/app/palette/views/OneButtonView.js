function OneButtonView (color) {
    var el = document.createElement('button');

    this.render = function () {
        el.classList.add('btn-color', color.getColor());
        el.innerHTML = color.getColor().toUpperCase();

        el.addEventListener('click', handler, false);

        return el;
    };

	function handler () {
		mediator.pub('color selected', color.getColor());

        color.increaseCounter();
	}
}