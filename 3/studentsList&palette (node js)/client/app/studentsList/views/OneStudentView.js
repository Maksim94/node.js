function OneStudentView (student) {
    var el = document.createElement('li');

    mediator.sub('studentChanged', fillElement);

    this.render = function () {
        fillElement();

        return el;
    };

    function fillElement () {
        el.innerHTML = oneStudentTpl.replacer(oneStudentTpl.oneStudent, student.toJSON());

        el.addEventListener('click', showDetails, false);
        el.querySelector('.delBtn').addEventListener('click', deleteStudent, false);
    }

    function showDetails () {
        mediator.pub('studentClicked', student);
    }

    function deleteStudent (e) {
        e.stopPropagation();

        el.remove();

        mediator.pub('studentRemoved', student);
        mediator.pub('studentClicked', 'delete');
    }
}