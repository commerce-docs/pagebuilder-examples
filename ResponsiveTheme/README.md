# Responsive Admin Theme

This admin theme is only required for the Responsive_Columns module because it fixes a Page Builder style that prevented the mobile breakpoint from having more than one column. Otherwise, there's no need to use an Admin theme to create responsive columns. But until the style fix is made, you can use this theme.

## Installation

1. Add this theme to the `design/adminhtml` directory in your Magento instance.

    ![Responsive Admin Theme](responsive-admin-them.png)

1. Run `bin/magento setup:upgrade` to install it.

## What it does

As shown in the screen shot, the `_mobile.less` file had to be overwritten because of the `width: 100% !important;` style that was used to make the `.mobile-viewport` display one column.

However, there is one other reason for using an Admin theme for viewports: modifying the switcher.html template. This is the template that Page Builder uses for it's viewport switcher buttons and tooltips.
