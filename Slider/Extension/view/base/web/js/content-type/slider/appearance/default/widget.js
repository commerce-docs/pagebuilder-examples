/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'Magento_PageBuilder/js/events',
    'slick'
], function ($, events) {
    'use strict';

    return function (config, sliderElement) {
        var $element = $(sliderElement);

        /**
         * Prevent each slick slider from being initialized more than once which could throw an error.
         */
        if ($element.hasClass('slick-initialized')) {
            $element.slick('unslick');
        }

        $element.slick({
            autoplay: $element.data('autoplay'),
            autoplaySpeed: $element.data('autoplay-speed') || 0,
            fade: $element.data('fade'),
            infinite: $element.data('is-infinite'),
            arrows: $element.data('show-arrows'),
            centerMode: $element.data('center-mode'),
            centerPadding: $element.data('center-padding'),
            dots: $element.data('show-dots')
        });

        // Redraw slide after content type gets redrawn
        events.on('contentType:redrawAfter', function (args) {
            if ($element.closest(args.element).length) {
                $element.slick('setPosition');
            }
        });
    };
});
