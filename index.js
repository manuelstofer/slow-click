'use strict';

var event = require('event');
module.exports = function (options) {
    options = options || {};

    var preventDefault = true,
        slow = options.slow || 200;

    event.bind(document.body, 'click', function (e) {
        if (preventDefault) {
            e.preventDefault();
        }
    });

    event.bind(document.body, 'mousedown', function () {
        preventDefault = false;
        setTimeout(function () {
            preventDefault = true;
        }, slow);
    });

};
