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

import $ from "jquery";
import ContentTypeConfigInterface from "Magento_PageBuilder/js/content-type-config.types";
import ContentTypeInterface from "Magento_PageBuilder/js/content-type.types";
import ColumnPreview from "Magento_PageBuilder/js/content-type/column/preview";
import ObservableUpdater from "Magento_PageBuilder/js/content-type/observable-updater";

export default class Preview extends ColumnPreview {

    /**
     *
     * @param {ContentTypeInterface} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(
        contentType: ContentTypeInterface,
        config: ContentTypeConfigInterface,
        observableUpdater: ObservableUpdater,
    ) {
        super(contentType, config, observableUpdater);
    }

    public initColumn(element: Element) {
        super.initColumn(element)
        this.element = $(element);

        // HACK: Adds the HR element as the next sibling of the column which is required
        // if you want to create different breakpoints for the flexbox row in use.

        this.element[0].insertAdjacentHTML('afterend', '<hr>');
    }
}
