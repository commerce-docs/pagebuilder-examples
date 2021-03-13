define(['jquery', 'mage/adminhtml/wysiwyg/events'], function ($, WysiwygEvents) {
    'use strict';

    /**
     * ComponentInitializer class
     *
     * @constructor
     */
    function ComponentInitializer() {

    }

    /**
     * Initialize the WYSIWYG instance
     *
     * @param wysiwyg
     */
    ComponentInitializer.prototype.initialize = function (wysiwyg) {
        var tinymce = wysiwyg.getAdapter();

        this.$element = $("#" + wysiwyg.elementId);
        this.config = wysiwyg.config;

        tinymce.eventBus.attachEventHandler(WysiwygEvents.afterFocus, this.onFocus.bind(this));
        tinymce.eventBus.attachEventHandler(WysiwygEvents.afterBlur, this.onBlur.bind(this));
    };

    /**
     * Called when TinyMCE is focused
     */
    ComponentInitializer.prototype.onFocus = function () {
        var self = this;

        // If there isn't enough room for a left-aligned toolbar, right align it
        if ($(window).width() <
            this.$element.offset().left + parseInt(this.config.adapter_config.minToolbarWidth, 10)
        ) {
            this.$element.addClass("_right-aligned-toolbar");
        }
        else {
            this.$element.removeClass("_right-aligned-toolbar");
        }

        $.each(
            this.config.adapter_config.parentSelectorsToUnderlay,
            function (i, selector) {
                self.$element.closest(selector).css("z-index", 100);
            }
        );
    };

    /**
     * Called when TinyMCE is blurred
     */
    ComponentInitializer.prototype.onBlur = function () {
        var self = this;

        $.each(
            this.config.adapter_config.parentSelectorsToUnderlay,
            function (i, selector) {
                self.$element.closest(selector).css("z-index", "");
            }
        );
    };

    return ComponentInitializer;
});