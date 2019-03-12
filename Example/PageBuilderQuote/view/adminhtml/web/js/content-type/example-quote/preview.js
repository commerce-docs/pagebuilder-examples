define([
    'Magento_PageBuilder/js/content-type/preview',
    'Magento_PageBuilder/js/content-type-toolbar',
    'Magento_PageBuilder/js/events',
    'Magento_PageBuilder/js/uploader',
    'Magento_PageBuilder/js/wysiwyg/factory',
    'Magento_PageBuilder/js/config'
], function (PreviewBase, Toolbar, events, Uploader, WysiwygFactory, Config) {
    'use strict';

    /**
     * Quote content type preview class
     *
     * @param parent
     * @param config
     * @param stageId
     * @constructor
     */
    function Preview(parent, config, stageId) {
        PreviewBase.call(this, parent, config, stageId);
        this.toolbar = new Toolbar(this, this.getToolbarOptions());
    }

    var $super = PreviewBase.prototype;

    Preview.prototype = Object.create(PreviewBase.prototype);

    /**
     * Bind any events required for the content type to function
     */
    Preview.prototype.bindEvents = function () {
        var self = this;
        PreviewBase.prototype.bindEvents.call(this);

        events.on(
            "stage:" + self.contentType.stageId + ":fullScreenModeChangeAfter",
            this.handleEvent.bind(this)
        );
    };

    /**
     * An example callback from the above bound event
     *
     * @param args
     */
    Preview.prototype.handleEvent = function (args) {
        console.log("Binding Works");
    };

    /**
     * Return a new instance of the uploader to allow for inline image uploading capabilities
     *
     * @returns {*}
     */
    Preview.prototype.getUploader = function () {
        var initialImageValue = this.contentType.dataStore
            .get(this.config.additional_data.uploaderConfig.dataScope, "");

        return new Uploader(
            "imageuploader_" + this.contentType.id,
            this.config.additional_data.uploaderConfig,
            this.contentType.id,
            this.contentType.dataStore,
            initialImageValue,
        );
    };

    /**
     * Determine if the WYSIWYG editor is supported
     *
     * @returns {boolean}
     */
    Preview.prototype.isWysiwygSupported = function () {
        return Config.getConfig("can_use_inline_editing_on_stage");
    };

    /**
     * Init the WYSIWYG component
     *
     * @param {HTMLElement} element
     */
    Preview.prototype.initWysiwyg = function (element) {
        var self = this;
        var config = this.config.additional_data.wysiwygConfig.wysiwygConfigData;

        this.element = element;
        element.id = this.contentType.id + "-editor";

        config.adapter.settings.fixed_toolbar_container = "#"
            + this.contentType.id
            + " .quote-description-text-content";

        WysiwygFactory(
            this.contentType.id,
            element.id,
            this.config.name,
            config,
            this.contentType.dataStore,
            "quote_author_desc",
            this.contentType.stageId,
        ).then(function (wysiwyg) {
            self.wysiwyg = wysiwyg;
        });
    };

    /**
     * Stop event to prevent execution of action when editing text area
     *
     * @returns {boolean}
     */
    Preview.prototype.stopEvent = function () {
        event.stopPropagation();
        return true;
    };

    /**
     * Modify the options returned by the content type
     *
     * @returns {*}
     */
    Preview.prototype.retrieveOptions = function () {
        var options = $super.retrieveOptions.call(this, arguments);

        // Change option menu icons
        options.remove.icon = "<i class='icon-admin-pagebuilder-error'></i>";

        // Change tooltips
        options.edit.title = "Open Editor";
        // options.remove.title = "Remove";
        // options.move.title = "Move";
        // options.duplicate.title = "Duplicate";

        // Remove menu options
        // delete options.move;
        // delete options.duplicate;
        // delete options.edit;
        // delete options.remove;

        return options;
    };

    /**
     * Allow various options of the content type to be modified from the stage
     *
     * @returns {*[]}
     */
    Preview.prototype.getToolbarOptions = function () {
        return [
            {
                key: "text_align",
                type: "select",
                values: [{
                    value: "left",
                    label: "Left",
                    icon: "icon-pagebuilder-align-left"
                }, {
                    value: "center",
                    label: "Center",
                    icon: "icon-pagebuilder-align-center"
                }, {
                    value: "right",
                    label: "Right",
                    icon: "icon-pagebuilder-align-right"
                }]
            },
            {
                key: "quote_css",
                type: "select",
                values: [{
                    value: "black-quote",
                    label: "Black",
                    icon: "icon-pagebuilder-black-swatch"
                }, {
                    value: "blue-quote",
                    label: "Blue",
                    icon: "icon-pagebuilder-blue-swatch"
                }, {
                    value: "green-quote",
                    label: "Green",
                    icon: "icon-pagebuilder-green-swatch"
                }, {
                    value: "red-quote",
                    label: "Red",
                    icon: "icon-pagebuilder-red-swatch"
                }, {
                    value: "purple-quote",
                    label: "Purple",
                    icon: "icon-pagebuilder-purple-swatch"
                }]
            }
        ];
    };

    return Preview;
});
