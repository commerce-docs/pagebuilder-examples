# Page Builder - Custom Quote

This is the completed module for the Create content type tutorial within the Page Builder documentation. It not only provides an example of a simple content type, but it also shows examples of other tasks you can implement using Page Builder's framework.

## Installation

These steps assume you have already cloned the `pagebuilder-examples` repo to the root of your Magento instance, as described in [Installing the example modules](../../README.md):

1. Navigate to to the `app/code/` directory and create a symlink using the following command:

    ```bash
    ln -s ../../pagebuilder-examples/Quote
    ```

1. From the Magento root directory, run the `setup:upgrade` command to install and enable the module:

   ```bash
   bin/magento setup:upgrade
   ```

## What's Included
The Quote module provides examples for the following content type elements:

- Custom toolbar
- Storefront widget
- Image uploader
- Inline text editor
- Custom images
- Custom styles
- Custom breakpoints
- Event handling
- Visual selectors

This example module can be installed into any Magento 2.3+ instance with Page Builder installed.

## Author

[Bruce Denham](https://github.com/bdenham). Contact us on the Slack [#pagebuilder channel](https://slack.com/app_redirect?channel=pagebuilder) for questions specific to this example.

## Feedback

We encourage and welcome you to help us keep these examples current by submitting Issues and Pull Requests. We also welcome your feedback and ideas on other code examples you would like to see added to this repo.
