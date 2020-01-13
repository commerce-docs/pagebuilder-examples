/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/**
 * Sets the countdown fields with remaining time
 *
 * @param {string} target The date we are counting down to
 * @param {Element} countdownField The countdown timer DOM Element
 * @param {number} intervalId ID of the process to update the countdown timer
 */
function setCountdownField(target, countdownField, intervalId) {
    if (!target || target === '') {
        clearInterval(intervalId);
        countdownField.children[0].innerHTML = '00';
        countdownField.children[2].innerHTML = '00';
        countdownField.children[4].innerHTML = '00';
        countdownField.children[6].innerHTML = '00';
    } else {
        const dateParts = target.split('/'),
            targetDate = new Date(parseInt(dateParts[2]), parseInt(dateParts[0]) - 1, parseInt(dateParts[1])),
            timeLeft = targetDate - Date.now();

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
}
