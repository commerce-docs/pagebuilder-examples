/*eslint-disable */
/* jscs:disable */

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

define(["jquery", "Magento_PageBuilder/js/content-type/column/preview"], function (_jquery, _preview) {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */
  // ADMIN COLUMN HACK:
  //
  // This preview component adds a temporary, runtime-only element
  // to the rendering of columns on the Admin stage. The element acts as a
  // breakpoint that makes it possible to wrap flexbox items (columns) to
  // the next row, based on the number assigned to the custom 'columnsPerRow'
  // property defined for each breakpoint in the view.xml file.
  //
  // Flexbox does not support row breaks. Hence the hack.
  //
  // With this element added as the next sibling of every column in the column group,
  // the column-group/widget.js does the work of adding a CSS class called '.break
  // to the element. The '.break' class ensures that the columnsPerRow property works.
  //
  var Preview = /*#__PURE__*/function (_preview2) {
    "use strict";

    _inheritsLoose(Preview, _preview2);

    /**
     *
     * @param {ContentTypeInterface} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    function Preview(contentType, config, observableUpdater) {
      return _preview2.call(this, contentType, config, observableUpdater) || this;
    }

    var _proto = Preview.prototype;

    _proto.initColumn = function initColumn(element) {
      _preview2.prototype.initColumn.call(this, element);

      this.element = (0, _jquery)(element); // HACK: Adds the HR element as the next sibling of the column which is required
      // if you want to create different breakpoints for the flexbox row in use.

      this.element[0].insertAdjacentHTML('afterend', '<hr>');
    };

    return Preview;
  }(_preview);

  return Preview;
});
//# sourceMappingURL=preview.js.map