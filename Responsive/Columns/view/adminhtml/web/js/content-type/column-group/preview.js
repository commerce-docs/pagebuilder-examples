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
  // This preview component calculates which "break" element(<hr>) in the
  // column-group gets a '.break' class. When added to the right element,
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
        var viewports = _config.getConfig('viewports');
        /********************************************/

        /* Control Number of Columns per Breakpoint */

        /********************************************/
        // Get the number of columns per row for the current breakpoint as configured in view.xml


        var columnsPerRow = parseFloat(viewports[args.viewport].options.columns.default.columnsPerRow); // Get all hr elements that were added by the column in initColumn.

        var hrNodes = (0, _jquery)('.pagebuilder-column-group hr'); // Remove classes applied on a previous run.

        if (args.viewport === 'desktop' || args.viewport === 'mobile-small') {
          hrNodes.removeClass('break');
        } else {
          hrNodes.removeClass('break'); // Add .break class to the hr elements that correspond
          // to the columnsPerRow setting for the breakpoint.

          for (var i = 0; i < hrNodes.length; i++) {
            if ((i + 1) % columnsPerRow === 0) {
              hrNodes[i].classList.add('break');
            }
          }
        }
        /****************************************/

        /* Hide Specific Columns on Breakpoints */

        /****************************************/
        // Get columns to hide for current breakpoint as set in view.xml config


        var columns = _this.contentType.getChildren()();

        var columnsToHide = viewports[args.viewport].options.columns.default.columnToHide.split(',').map(Number); // Ensure all columns are visible to start with

        columns.forEach(function (column) {
          (0, _jquery)(column.preview.element[0]).removeClass('hide');
        }); // Hide the columns specified for the breakpoint in the view.xml config

        columnsToHide.forEach(function (colToHide) {
          if (colToHide !== 0) {
            (0, _jquery)(columns[colToHide - 1].preview.element[0]).addClass('hide');
          }
        });

        _events.off("stage:" + _this.contentType.stageId + ":viewportChangeAfter");
      }, 'stage:viewportChangeAfter');

      return _this;
    }

    return Preview;
  }(_preview);

  return Preview;
});
//# sourceMappingURL=preview.js.map