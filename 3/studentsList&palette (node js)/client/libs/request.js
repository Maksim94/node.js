var request = {
    loadAsync: function (URI, callback) {
        var ajax = this.getAjax();

        ajax.open('GET', URI, true);

        ajax.addEventListener('readystatechange',
            function () {
                if (ajax.readyState === 4 && ajax.status === 200) {
                    callback(ajax.responseText);
                }
            }, false);

        ajax.send();
    },
    loadSync: function (URI, callback) {
        var ajax = this.getAjax();
    
        ajax.open('GET', URI, false);
        ajax.send(null);

        if (ajax.status === 200) {
            callback(ajax.responseText);
        }
    },
    getAjax: function () {
        var ajax;

        if (XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        } else {
            ajax = new ActiveXObject();
        }

        return ajax;
    }
};