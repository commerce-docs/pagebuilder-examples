# PageBuilderExtensionImage

This example module shows you how to add lazy loading behavior to the Image content type using
 [lazysizes](https://github.com/aFarkas/lazysizes). The module is also setup to support native lazy loading
 (for browsers that support it) using the lazysizes 
 [native-loading plugin](https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/native-loading).
 However, the plugin is currently commented out because it seemed flaky within the admin.

## Installation and usage

To install this extension module:

1. Copy the `PageBuilderExtensionImage` directory and all its contents into a new (or your existing) `Example` vendor directory: `<magento-root>/app/code/Example`.
2. Command line into your `<magento-root>` directory and run `bin/magento setup:upgrade` to install the extension.
3. Drag and drop several Image content types onto the stage, upload images to each, and Save.
4. Open the Network tab in Chrome's devtools and watch the magic (you should see lazysizes.js as the initiator for your images). 

## Feedback

We encourage and welcome you to help us keep these examples current by submitting pull requests and issues. 
We also welcome your feedback and ideas on other code examples you would like to see added to this repo. 

## Slack
You can join our [#pagebuilder channel](https://magentocommeng.slack.com/messages/CHB455HPF), within [magentocommeng.slack.com](https://magentocommeng.slack.com/), to post your questions to the Page Builder community.
