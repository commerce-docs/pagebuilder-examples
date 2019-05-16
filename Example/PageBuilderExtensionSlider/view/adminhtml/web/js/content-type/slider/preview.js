define([
    'Magento_PageBuilder/js/content-type/slider/preview',
], function (PreviewBase) {
    'use strict';
    var $super;

    function Preview(parent, config, stageId) {
        PreviewBase.call(this, parent, config, stageId);
    }

    Preview.prototype = Object.create(PreviewBase.prototype);
    $super = PreviewBase.prototype;

    Preview.prototype.buildSlickConfig = function buildSlickConfig() {
        var data = this.contentType.dataStore.getState();
        var settings = $super.buildSlickConfig.call(this);

        settings.centerMode = data.center_mode === "true";
        settings.centerPadding = data.center_padding;

        return settings;
    };

    return Preview;
});
