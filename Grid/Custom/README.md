# Page Builder - Custom Homepage Grid

This module serves as an example for how you can create relatively complex content types within the new Page Builder framework. This module was created to show how we can easily rebuild the Luma sample content using Page Builder.

This module contains two content types, both with different purposes:
- Homepage Grid
    - This is responsible for housing all the grid items to build up the final grid.
    - By design this content type can only contain grid items, and is fixed to having 5 children for our specific rigid grid.
- Homepage Grid Item
    - This acts very much like a row or a column, housing the internal content and providing various background options.
    - This can contain any content type available in the framework (providing their configuration settings allow it) to generate rich content.

## Installation

These steps assume you have already cloned the `pagebuilder-examples` repo to the root of your Magento instance, as described in [Installing the example modules](../../README.md):

1. Navigate to to the `app/code/` directory and create a symlink using the following command:

    ```bash
    ln -s ../../pagebuilder-examples/Grid
    ```

1. From the Magento root directory, run the `setup:upgrade` command to install and enable the module:

   ```bash
   bin/magento setup:upgrade
   ```

1. Drag and drop a Grid content type to the stage and start adding content to the Grid.

## Example
Within this module we provide the master storage format contents for the luma homepage that's been presented alongside this module.

**Admin View:**
![Luma Homepage Admin](examples/luma_homepage_admin.png "Luma Homepage Admin")

**Storefront View:**
![Luma Homepage Storefront](examples/luma_homepage_storefront.png "Luma Homepage Storefront")

This example can be imported into any Magento 2.3+ instance with Page Builder installed alongside this module. This can be done by updating the entities content to that provided in `examples/luma_homepage.html`.

## Author

[Dave Macaulay](https://github.com/davemacaulay). Contact us on the Slack [#pagebuilder channel](https://slack.com/app_redirect?channel=pagebuilder) for questions specific to this example.

## Feedback

We encourage and welcome you to help us keep these examples current by submitting Issues and Pull Requests. We also welcome your feedback and ideas on other code examples you would like to see added to this repo.
