# DeactivatingPageBuilder

This example module shows you how to disable Page Builder for a particular page in Magento, specifically Pages, Blocks, and Dynamic Blocks. This can be useful for when you have CMS Blocks that were created before installing Magento Commerce 2.3.1 with Page Builder and want to prevent Page Builder's default behavior of wrapping your content within a row (which adds div tags that may affect your block designs).

## Installation and usage

To install this module:

1. Copy the `DeactivingPageBuilder` directory and all its contents into a new (or your existing) `Example` vendor directory: `<magento-root>/app/code/Example`.
2. Command line into your `<magento-root>` directory and run `bin/magento setup:upgrade` to install the extension.
3. Navigate to a CMS Block page and view the WYSIWYG editor without Page Builder.

    ![Page Builder disabled for blocks](pagebuilder-disabled-for-blocks.png "Page Builder disabled for blocks")

## Feedback

We encourage and welcome you to help us keep these examples current by submitting pull requests and issues. 
We also welcome your feedback and ideas on other code examples you would like to see added to this repo. 

## Slack
You can join our [#pagebuilder channel](https://magentocommeng.slack.com/messages/CHB455HPF), within [magentocommeng.slack.com](https://magentocommeng.slack.com/), to post your questions to the Page Builder community.
