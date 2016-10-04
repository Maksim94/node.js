function StudentsListController () {
    var studentsList = document.getElementsByClassName('studentsList')[0],
        info = document.getElementsByClassName('info')[0],
        studentsCollection = new StudentsCollection(),
        addInfoView = new AddInfoView(),
        studentsListView;

    info.appendChild(addInfoView.render());

    studentsCollection.init();
    studentsCollection.on('inited', createList);

    function createList () {
        studentsListView = new StudentsListView(studentsCollection);
        studentsList.appendChild(studentsListView.render());
    }
}
