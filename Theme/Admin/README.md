# Page Builder Admin Theme

This Admin theme is only required for the `Columns_Extension` module because it fixes a Page Builder style that prevents the `mobile` breakpoint from having more than one column. This will be fixed in Page Builder core in a future update. But until then, you can use this theme or add the fix to your own Admin theme.

## Installation

Follow these steps to install the theme into your Magento instance:

1. Clone the `pagebuilder-examples` repo to the root of your Magento instance:

    ```bash
    git clone https://github.com/magento-devdocs/pagebuilder-examples.git
    ```

1. Navigate to to the `app/design/adminhtml/` directory, then use a symlink to add this theme, as shown:

    ```bash
    ln -s ../../../pagebuilder-examples/Theme
    ```

1. From the Magento root directory, run the `setup:upgrade` command to install and enable the modules:

   ```bash
   bin/magento setup:upgrade
   ```

## What it does

When installed, this theme module updates your Magento instance in two ways:

1. Overwrites the `_mobile.less` file to remove the `width: 100% !important;` rule in the `.mobile-viewport` class, shown commented out here:

    ![CSS Fix for .mobile-viewport](responsive-admin-theme.png)

    This is necessary if you want more than one column for your mobile breakpoint (`max-width: 768px`). It will be fixed in a future Page Builder update.

1. Modifies the `switcher.html` template. Page Builder uses this template for its viewport switcher buttons and tooltips.

    ![Viewport template update](viewport-templates.png)
