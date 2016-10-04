function StudentsListController () {
    var studentsList = document.getElementsByClassName('studentsList')[0],
        info = document.getElementsByClassName('info')[0],
        studentsCollection = new StudentsCollection(),
        addInfoView = new AddInfoView(),
        studentsListView;

    mediator.sub('students loaded', createList);
    info.appendChild(addInfoView.render());

    function createList () {
        studentsListView = new StudentsListView(studentsCollection);
        studentsList.appendChild(studentsListView.render());
    }
}
