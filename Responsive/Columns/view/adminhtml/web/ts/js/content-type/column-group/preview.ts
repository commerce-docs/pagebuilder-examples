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

import $ from 'jquery';
import Config from 'Magento_PageBuilder/js/config';
import ColumnGroup from 'Magento_PageBuilder/js/content-type-collection';
import ContentTypeConfigInterface from 'Magento_PageBuilder/js/content-type-config.types';
import ColumnGroupPreview from 'Magento_PageBuilder/js/content-type/column-group/preview';
import ObservableUpdater from 'Magento_PageBuilder/js/content-type/observable-updater';
import events from 'Magento_PageBuilder/js/events';

/**
 * @api
 */
export default // @ts-ignore
class Preview extends ColumnGroupPreview {
    /**
     *
     * @param {ContentTypeCollection} contentType
     * @param {ContentTypeConfigInterface} config
     * @param {ObservableUpdater} observableUpdater
     */
    constructor(contentType: ColumnGroup, config: ContentTypeConfigInterface, observableUpdater: ObservableUpdater) {
        super(contentType, config, observableUpdater);

        events.on(
            `stage:${this.contentType.stageId}:viewportChangeAfter`,
            (args: {viewport: string}) => {
                const viewports = Config.getConfig('viewports');

                /********************************************/
                /* Control Number of Columns per Breakpoint */
                /********************************************/

                // Get the number of columns per row for the current breakpoint as configured in view.xml
                const columnsPerRow = parseFloat(viewports[args.viewport].options.columns.default.columnsPerRow);

                // Get all hr elements that were added by the column in initColumn.
                const hrNodes = $('.pagebuilder-column-group hr');

                // Remove classes applied on a previous run.
                if (args.viewport === 'desktop' || args.viewport === 'mobile-small') {
                    hrNodes.removeClass('break');
                } else {
                    hrNodes.removeClass('break');

                    // Add .break class to the hr elements that correspond
                    // to the columnsPerRow setting for the breakpoint.
                    for (let i = 0; i < hrNodes.length; i++) {
                        if ((i + 1) % columnsPerRow === 0) {
                            hrNodes[i].classList.add('break');
                        }
                    }
                }

                /****************************************/
                /* Hide Specific Columns on Breakpoints */
                /****************************************/

                // Get columns to hide for current breakpoint as set in view.xml config
                const columns = this.contentType.getChildren()();
                const columnsToHide = viewports[args.viewport].options.columns.default.columnToHide.split(',').map(Number);

                // Ensure all columns are visible to start with
                columns.forEach(column => {
                    $(column.preview.element[0]).removeClass('hide');
                });

                // Hide the columns specified for the breakpoint in the view.xml config
                columnsToHide.forEach((colToHide: number) => {
                    if (colToHide !== 0) {
                        $(columns[colToHide - 1].preview.element[0]).addClass('hide');
                    }
                });
                events.off(`stage:${this.contentType.stageId}:viewportChangeAfter`);
            },
            'stage:viewportChangeAfter'
        );
    }
}
