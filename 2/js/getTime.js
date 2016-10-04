function GetTime () {
    var getTime = document.getElementById('getTime'),
        time = document.getElementsByClassName('time')[0];

    getTime.addEventListener('click', request, false);

    function getAjax () {
        var ajax;

        if (XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject();
        }

        return ajax;
    }

    function request () {
        var ajax = getAjax();

        ajax.open('GET','/getTime' , true);

        ajax.addEventListener('readystatechange',
            function () {
                if (ajax.readyState === 4 && ajax.status === 200) {
                    time.innerHTML = ajax.responseText;
                }
            }, false);

        ajax.send();
    }
}
