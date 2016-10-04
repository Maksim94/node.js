function StudentsListController () {
    var studentsList = document.getElementsByClassName('studentsList')[0],
        info = document.getElementsByClassName('info')[0],
        studentsCollection = new StudentsCollection(),
        studentsListView = new StudentsListView(studentsCollection),
        addInfoView = new AddInfoView();

    studentsList.appendChild(studentsListView.render());
    info.appendChild(addInfoView.render());
}