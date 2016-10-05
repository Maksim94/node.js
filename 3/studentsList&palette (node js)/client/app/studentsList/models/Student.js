function Student (_lastName, _name, _gender, _skype) {
    var observer = new PubSub(),
        lastName = _lastName,
        name = _name,
        gender = _gender,
        skype = _skype;

    this.on = function (event, fn) {
        observer.sub(event, fn);
    };

    this.deleted = function () {
        observer.pub('student removed');
    }

    this.changed = function () {
        observer.pub('student changed');
    }

	this.getName = function () {
        return name;
    };
    this.setName = function (value) {
        name = value;
    };

    this.getLastName = function () {
        return lastName;
    };
    this.setLastName = function (value) {
        lastName = value;
    };    

    this.getGender = function () {
        return gender;
    };
    this.setGender = function (value) {
        gender = value;
    };

    this.getSkype = function () {
        return skype;
    };
    this.setSkype = function (value) {
        skype = value;
    };

    this.toJSON = function () {
        return {
            lastName: this.getLastName(),
            name: this.getName(),
            gender: this.getGender(),
            skype: this.getSkype()
        };
    };
}