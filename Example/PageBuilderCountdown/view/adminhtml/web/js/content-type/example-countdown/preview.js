define([
    'knockout',
    'Magento_PageBuilder/js/content-type/preview'
], function (_knockout, PreviewBase) {
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

        if (!target || target === '') {
            clearInterval(this.intervalId);
            countdownField.children[0].innerHTML = '00';
            countdownField.children[2].innerHTML = '00';
            countdownField.children[4].innerHTML = '00';
            countdownField.children[6].innerHTML = '00';
        } else {
            let dateParts = target.split('/');
            let targetDate = new Date(parseInt(dateParts[2]), parseInt(dateParts[0]) - 1, parseInt(dateParts[1]));
            let timeLeft = targetDate - Date.now();

            if (timeLeft <= 0) {
                clearInterval(this.intervalId);
                countdownField.children[0].innerHTML = '00';
                countdownField.children[2].innerHTML = '00';
                countdownField.children[4].innerHTML = '00';
                countdownField.children[6].innerHTML = '00';
            } else {
                let days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
                let hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
                let minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
                let seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);
                countdownField.children[0].innerHTML = days < 10 ? '0' + days : days;
                countdownField.children[2].innerHTML = hours < 10 ? '0' + hours : hours;
                countdownField.children[4].innerHTML = minutes < 10 ? '0' + minutes : minutes;
                countdownField.children[6].innerHTML = seconds < 10 ? '0' + seconds : seconds;
            }
        }
    };

    return Preview;
});
