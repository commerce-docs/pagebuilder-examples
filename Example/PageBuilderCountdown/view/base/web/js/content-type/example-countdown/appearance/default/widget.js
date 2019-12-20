define([
    'jquery'
], function ($) {
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

            if (!target || target === '') {
                clearInterval(intervalId);
                countdownField.children[0].innerHTML = '00';
                countdownField.children[2].innerHTML = '00';
                countdownField.children[4].innerHTML = '00';
                countdownField.children[6].innerHTML = '00';
            } else {
                let dateParts = target.split('/');
                let targetDate = new Date(parseInt(dateParts[2]), parseInt(dateParts[0]) - 1, parseInt(dateParts[1]));
                let timeLeft = targetDate - Date.now();

                if (timeLeft <= 0) {
                    clearInterval(intervalId);
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
        },
            1000,
            [countdownField, intervalId]
        );
    };
});
