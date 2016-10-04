function StudentsCollection () {
    var students = [];

    request(initStudents);

    function initStudents (response) {
        response.forEach(function (obj) {
            students.push(new Student(obj.lastName, obj.name, obj.gender, obj.skype));
        });
    }


    function request (callback) {
        /*var ajax = getAjax();

        ajax.open('GET','/getStudents' , true);

        ajax.addEventListener('readystatechange',
            function () {
                if (ajax.readyState === 4 && ajax.status === 200) {
                    callback(JSON.parse(ajax.responseText));
                }
            }, false);

        ajax.send();*/

        var ajax = new XMLHttpRequest();
        
        ajax.open('GET', '/getStudents', false);
        ajax.send(null);

        if (ajax.status === 200) {
            callback(JSON.parse(ajax.responseText));
        }
    }

    function getAjax () {
        var ajax;

        if (XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject();
        }

        return ajax;
    }
    
    this.forEach = function (iterator) {
        students.forEach(iterator);
    };

    this.remove = function (student) {
        students.splice(students.indexOf(student), 1);
    };
}