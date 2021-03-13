# Page Builder Admin Theme

This Admin theme is only required for the `Columns_Extension` module because it fixes a Page Builder style that prevents the `mobile` breakpoint from having more than one column. Otherwise, there's no need to use an Admin theme to extend columns. But until the mobile style is fixed, you can use this theme.

## Installation

1. Add this theme to the `app/design/adminhtml` directory in your Magento instance.

    ![Admin Theme](responsive-admin-theme.png)

1. Run `bin/magento setup:upgrade` to install it.

## What it does

Two main things:

1. Overwrites the `_mobile.less` file to remove the `width: 100% !important;` rule in the `.mobile-viewport` class.
1. Modifies the `switcher.html` template for educational purposes. Page Builder uses this template for its viewport switcher buttons and tooltips.
