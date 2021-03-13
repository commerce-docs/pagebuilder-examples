define([
    'jquery',
    'knockout',
    'Magento_PageBuilder/js/events',
    'underscore',
    'Magento_PageBuilder/js/content-type/preview-collection',
    'Magento_PageBuilder/js/content-type-factory',
    'Magento_PageBuilder/js/config',
], function ($, ko, events, underscore, PreviewCollection, createContentType, pageBuilderConfig) {
    'use strict';

    /**
     * Preview Constructor
     *
     * @param parent
     * @param config
     * @param stageId
     * @constructor
     */
    function Preview(parent, config, stageId) {
        var self = this;

        PreviewCollection.call(this, parent, config, stageId);

        events.on("homepage-grid:dropAfter", function (args) {
            if (args.id === self.contentType.id && self.contentType.children().length === 0) {
                // Once the grid is ready, let's add in our children
                self.populateGrid();
            }
        });
    }
    Preview.prototype = Object.create(PreviewCollection.prototype);

    /**
     * Populate the grid with 5 children
     */
    Preview.prototype.populateGrid = function () {
        var self = this;
        var i;

        // Create 5 homepage grid items
        for (i = 0; i < 5; i++) {
            console.log(this.contentType);
            createContentType(
                pageBuilderConfig.getContentTypeConfig("homepage-grid-item"),
                this.contentType,
                this.contentType.stageId
            ).then(function (gridItem) {
                self.contentType.addChild(gridItem);
            });
        }
    };

    /**
     * Mark as not a standard container
     *
     * @returns {boolean}
     */
    Preview.prototype.isContainer = function () {
        return false;
    };

    return Preview;
});
