function StudentsCollection () {
    var students = [];

    request.loadSync('/getStudents', initStudents);

    function initStudents (response) {
        response = JSON.parse(response);
        response.forEach(function (obj) {
            students.push(new Student(obj.lastName, obj.name, obj.gender, obj.skype));
        });
    }
    
    this.forEach = function (iterator) {
        students.forEach(iterator);
    };

    this.remove = function (student) {
        students.splice(students.indexOf(student), 1);
    };
}