/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// FRONTEND COLUMN HACK:
//
// This widget adds a temporary, runtime-only HR element
// to the rendering of columns on the frontend. This element acts as a
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

define(['jquery'], function($) {
    'use strict';
    return function(config, element) {
        var $element = $(element);
        $element[0].insertAdjacentHTML('afterend', '<hr>');
    };
});
