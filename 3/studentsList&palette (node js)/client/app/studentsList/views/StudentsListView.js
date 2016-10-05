function StudentsListView (studentsCollection) {
    //mediator.sub('student removed', removeStudent);

    this.render = function () {
        var fragment = document.createDocumentFragment(),
            oneStudent;

        studentsCollection.forEach(function (student) {
            student.on('student removed', removeStudent);
            
            oneStudent = new OneStudentView(student);

            fragment.appendChild(oneStudent.render());
        });

        return fragment;
    };

	function removeStudent () {
		studentsCollection.remove();
	}
}