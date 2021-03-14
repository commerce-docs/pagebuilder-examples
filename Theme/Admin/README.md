# Page Builder Admin Theme

This Admin theme is only required for the `Columns_Extension` module because it fixes a Page Builder style that prevents the `mobile` breakpoint from having more than one column. Otherwise, there's no need to use an Admin theme to extend columns. But until the mobile style is fixed, you can use this theme.

## Installation

1. If you haven't already done so, clone the `pagebuilder-examples` repo to the root of your Magento instance:

    ```bash
    git clone https://github.com/magento-devdocs/pagebuilder-examples.git
    ```

1. Navigate to to the `app/design/adminhtml/` directory in your Magento instance, then use a symlink to add this theme, as shown:

    ```bash
    ln -s ../../../pagebuilder-examples/Theme
    ```

1. Run `bin/magento setup:upgrade` to install it.

## What it does

Two main things:

1. Overwrites the `_mobile.less` file to remove the `width: 100% !important;` rule in the `.mobile-viewport` class, shown commented out here:

    ![Admin Theme](responsive-admin-theme.png)

1. Modifies the `switcher.html` template for educational purposes. Page Builder uses this template for its viewport switcher buttons and tooltips.
