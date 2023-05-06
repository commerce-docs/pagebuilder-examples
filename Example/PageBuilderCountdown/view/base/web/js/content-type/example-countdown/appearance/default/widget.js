/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'Example_PageBuilderCountdown/js/content-type/example-countdown/countdown'
], function ($, setCountdownField) {
    'use strict';

    return function (config, element) {
        var countdownField = element[0].children[0],
            intervalId = 0;

        intervalId = setInterval(function (field, intervalId) {
            let target = '';
            let countdownField = field[0].children[0];

            if (countdownField) {
                target = countdownField.getAttribute('target_date');
            }

            this.setCountdownField(target, countdownField, intervalId);
        },
            1000,
            [countdownField, intervalId]
        );
    };
});
