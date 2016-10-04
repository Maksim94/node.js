function StudentsCollection () {
    var students = [];

    request.load('students', initStudents);

    function initStudents (response) {
        response.forEach(function (obj) {
            students.push(new Student(obj.lastName, obj.name, obj.gender, obj.skype));
        });

        mediator.pub('students loaded', students);
    }
    
    this.forEach = function (iterator) {
        students.forEach(iterator);
    };

    this.remove = function (student) {
        students.splice(students.indexOf(student), 1);
    };
}