var mediator = {
    events: {},
    sub: function (eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },
    pub: function (eventName, data) {
        this.events[eventName].forEach(function (fn) {
            fn(data);
        });
    }
};