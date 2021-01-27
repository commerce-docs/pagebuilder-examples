/*eslint-disable */
/* jscs:disable */

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

define(["jquery", "Magento_PageBuilder/js/config", "Magento_PageBuilder/js/content-type/column-group/preview", "Magento_PageBuilder/js/events"], function (_jquery, _config, _preview, _events) {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */
  // ADMIN COLUMN-GROUP HACK:
  //
  // This preview component calculates which "break" element in the
  // column-group get a '.break' class. When added to the right element,
  // the '.break' class ensures that the flexbox wraps its items (columns)
  // to the next row. The native flexbox behavior then takes over by
  // proportionally expanding the row's columns to fill the remaining
  // space on the row.
  //
  // This ensures that the custom 'columnsPerRow' property defined
  // in the view.xml file (for each breakpoint) works as it should.
  //
  // Flexbox does not support row breaks. Hence the hack. It works!
  //
  // @ts-ignore

  /**
   * @api
   */
  var Preview = /*#__PURE__*/function (_preview2) {
    "use strict";

    _inheritsLoose(Preview, _preview2);

    /**
     *
     * @param {ContentTypeCollection} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    function Preview(contentType, config, observableUpdater) {
      var _this;

      _this = _preview2.call(this, contentType, config, observableUpdater) || this;

      _events.on("stage:" + _this.contentType.stageId + ":viewportChangeAfter", function (args) {
        var viewports = _config.getConfig("viewports");

        var columnsPerRow = parseFloat(viewports[args.viewport].options.columns.default.columnsPerRow); // HACK: For flexbox row breaks defined in columnsPerRow.
        // Get all hr elements that were added by the column in initColumn.

        var hrNodes = (0, _jquery)('.pagebuilder-column-group hr'); // Remove classes applied on a previous run.

        hrNodes.removeClass("break"); // Add .break class to the hr elements that correspond
        // to the columnsPerRow setting for the breakpoint.

        for (var i = 0; i < hrNodes.length; i++) {
          if ((i + 1) % columnsPerRow === 0) {
            hrNodes[i].classList.add('break');
          }
        }
      });

      return _this;
    }

    return Preview;
  }(_preview);

  return Preview;
});
//# sourceMappingURL=preview.js.map