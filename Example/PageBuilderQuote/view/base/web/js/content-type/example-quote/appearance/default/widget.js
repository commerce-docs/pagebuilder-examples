define([
    'jquery',
], function ($) {
    'use strict';

    return function (config, element) {
        var element = $(element);
        console.log("ELEMENT: " + element.data('element'));
    };
});
