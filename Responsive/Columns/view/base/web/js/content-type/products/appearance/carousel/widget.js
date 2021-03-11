/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// ADMIN and FRONTEND FIX FOR PRODUCTS:
//
// This widget fixes the display of the products content type so that the
// products content type will support all defined breakpoints (not just mobile).

define([
    'jquery',
    'underscore',
    'matchMedia',
    'Magento_PageBuilder/js/utils/breakpoints',
    'Magento_PageBuilder/js/events',
    'slick',
], function($, _, mediaCheck, breakpointsUtils, events) {
    'use strict';

    /**
     * Build slick
     *
     * @param {jQuery} $carouselElement
     * @param {Object} config
     */
    function buildSlick($carouselElement, config) {
        /**
         * Prevent each slick slider from being initialized more than once which could throw an error.
         */
        if ($carouselElement.hasClass('slick-initialized')) {
            $carouselElement.slick('unslick');
        }

        config.slidesToScroll = config.slidesToShow;
        $carouselElement.slick(config);
    }

    /**
     * Initialize slider.
     *
     * @param {jQuery} $element
     * @param {Object} slickConfig
     * @param {Object} breakpoint
     */
    function initSlider($element, slickConfig, breakpoint) {
        var productCount = $element.find('.product-item').length,
            $carouselElement = $($element.children()),
            centerModeClass = 'center-mode',
            carouselMode = $element.data('carousel-mode'),
            slidesToShow = breakpoint.options.products[carouselMode]
                ? breakpoint.options.products[carouselMode].slidesToShow
                : breakpoint.options.products.default.slidesToShow;

        slickConfig.slidesToShow = parseFloat(slidesToShow);

        if (carouselMode === 'continuous' && productCount > slickConfig.slidesToShow) {
            $element.addClass(centerModeClass);
            slickConfig.centerPadding = $element.data('center-padding');
            slickConfig.centerMode = true;
        } else {
            $element.removeClass(centerModeClass);
            slickConfig.infinite = $element.data('infinite-loop');
        }

        buildSlick($carouselElement, slickConfig);
    }

    return function(config, element) {
        var $element = $(element),
            $carouselElement = $($element.children()),
            currentViewport = config.currentViewport,
            currentBreakpoint = config.breakpoints[currentViewport],
            slickConfig = {
                autoplay: $element.data('autoplay'),
                autoplaySpeed: $element.data('autoplay-speed') || 0,
                arrows: $element.data('show-arrows'),
                dots: $element.data('show-dots'),
            };

        _.each(config.breakpoints, function(breakpoint) {
            mediaCheck({
                media: breakpointsUtils.buildMedia(breakpoint.conditions),

                /** @inheritdoc */
                entry: function() {
                    initSlider($element, slickConfig, breakpoint);
                },
            });
        });

        // FIX: This conditional was fixed so that the products content
        // type will support all defined breakpoints (not just mobile).

        if (currentViewport !== 'desktop' && currentViewport !== undefined) {
            initSlider($element, slickConfig, currentBreakpoint);
        }

        // Redraw slide after content type gets redrawn
        events.on('contentType:redrawAfter', function(args) {
            if ($carouselElement.closest(args.element).length) {
                $carouselElement.slick('setPosition');
            }
        });

        events.on(
            'stage:viewportChangeAfter',
            function(args) {
                var breakpoint = config.breakpoints[args.viewport];
                initSlider($element, slickConfig, breakpoint);
                events.off('stage:viewportChangeAfter');
            },
            'stage:viewportChangeAfter'
        );
    };
});
