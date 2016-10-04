function StudentsListView (studentsCollection) {
    mediator.sub('studentRemoved', removeStudent);

    this.render = function () {
        var fragment = document.createDocumentFragment(),
            oneStudent;

        studentsCollection.forEach(function (student) {
            oneStudent = new OneStudentView(student, removeStudent);

            fragment.appendChild(oneStudent.render());
        });

        return fragment;
    };

	function removeStudent (student) {
		studentsCollection.remove(student);
	}
}