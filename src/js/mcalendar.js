(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD is used - Register as an anonymous module.
        define(['jquery', 'moment'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'), require('moment'));
    } else {
        // Neither AMD nor CommonJS used. Use global variables.
        if (typeof jQuery === 'undefined') {
            throw 'jQuery to be loaded first';
        }
        if (typeof moment === 'undefined') {
            throw 'Moment.js to be loaded first';
        }
        factory(jQuery, moment);
    }
}(function ($, moment) {
    'use strict';
}));