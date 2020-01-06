/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// import setCountdownField from 'Magento_PageBuilderCountdown/js/content-type/example-countdown/countdown';

define([
    'knockout',
    'Magento_PageBuilder/js/content-type/preview',
    'Example_PageBuilderCountdown/js/content-type/example-countdown/countdown'
], function (_knockout, PreviewBase, setCountdownField) {
    'use strict';

    function Preview(parent, config, stageId) {
        let _this = PreviewBase.call(this, parent, config, stageId) || this;
        this.intervalId = setInterval(this.populateCountdown, 1000, this);
        _this.targetDate = _knockout.observable(null);
        this.contentType.dataStore.subscribe(function (data) {
            _this.targetDate(data.target_date);
        });
        _this.targetDate.subscribe(function (index) {
            clearInterval(this.intervalId);
            this.intervalId = setInterval(this.populateCountdown, 1000, this);
        }.bind(this));
    }

    Preview.prototype = Object.create(PreviewBase.prototype);

    /**
     * Populate the countdown timer with values based on the target date
     *
     * @returns {void}
     */
    Preview.prototype.populateCountdown = function populateCountdown(preview) {
        let target = '';
        let countdownField = document.querySelector(`#${preview.contentType.id} .countdown-field`);

        if (!countdownField) {
            return;
        }

        if (preview && preview.data && preview.data.countdown_target) {
            target = preview.data.countdown_target.attributes()['target_date'];
        }

        this.setCountdownField(target, countdownField, this.intervalId);
    };

    return Preview;
});
