/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// FRONTEND COLUMN-GROUP HACK:
//
// This widget calculates which "break" element in the column-group
// it should add a '.break' class to. When added, the '.break' class
// ensures that the flexbox wraps its items (columns) to the next row.
// The native behavior of the flexbox then takes over by expanding the
// rows remaining columns to proportionally fill the remaining space.
//
// The result ensures that the custom 'columnsPerRow' property defined
// in the view.xml file (for each breakpoint) works as it should.
//
// Flexbox does not support row breaks. Hence the hack. It works!
//

define([
    'jquery',
    'underscore',
    'matchMedia',
    'Magento_PageBuilder/js/utils/breakpoints',
    'Magento_PageBuilder/js/events'
], function ($, _, mediaCheck, breakpointsUtils, events) {
    'use strict';

    function setColumns($element, breakpoint) {
        var columnsPerRow = parseFloat(breakpoint.options.columns.default.columnsPerRow);

        // Get all hr elements that were added by the columns in initColumn.
        const hrNodes = $('.pagebuilder-column-group hr');

        // Remove classes applied on a previous run.
        hrNodes.removeClass("break");

        // Add .break class to the hr elements that correspond
        // to the columnsPerRow setting for the breakpoint.
        for (let i = 0; i < hrNodes.length; i++) {
            if ((i + 1) % columnsPerRow === 0) {
                hrNodes[i].classList.add('break');
            }
        }
    }

    return function (config, element) {
        var $element = $(element);

        _.each(config.breakpoints, function (breakpoint) {
            mediaCheck({
                media: breakpointsUtils.buildMedia(breakpoint.conditions),

                /** @inheritdoc */
                entry: function () {
                    setColumns($element, breakpoint);
                }
            });
        });
    };
});
