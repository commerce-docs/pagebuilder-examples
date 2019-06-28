# Page Builder Examples

This repo is a collection of Page Builder content type modules created to teach you how Page Builder content types work. The modules will help you learn by example, and teach you best practices for developing custom Page Builder modules.

**NOTE**: The code examples included in this repository are only compatible with Magento 2.3.1 with Page Builder 1.0.0 installed.

## Example Modules

The Page Builder team members created these modules to serve as examples for learning. They are not fully tested or guaranteed to work perfectly. However, we will do our best to improve these examples and keep them updated with the latest releases of Page Builder.

- **[DeactivatingPageBuilder](https://github.com/magento-devdocs/pagebuilder-examples/tree/master/Example/DeactivatingPageBuilder)** — This example module shows you how to disable Page Builder for a particular page in Magento, specifically Pages, Blocks, and Dynamic Blocks. Created by [Bruce Denham](https://magentocommeng.slack.com/messages/UA3GYB2KW).

- **[PageBuilderExtensionBaseForms](https://github.com/magento-devdocs/pagebuilder-examples/tree/master/Example/PageBuilderExtensionBaseForms)** — This module shows you how to remove fields and fieldsets from Page Builder's built-in forms. Created by [Bruce Denham](https://magentocommeng.slack.com/messages/UA3GYB2KW).

- **[PageBuilderExtensionText](https://github.com/magento-devdocs/pagebuilder-examples/tree/master/Example/PageBuilderExtensionText)** — This module shows you how to customize the Page Builder's Text toolbar, integrate your own theme's typography, and add TinyMCE's `code` plugin to the toolbar so you can view the HTML code directly. Created by [Bruce Denham](https://magentocommeng.slack.com/messages/UA3GYB2KW).

- **[PageBuilderExtensionSlider](https://github.com/magento-devdocs/pagebuilder-examples/tree/master/Example/PageBuilderExtensionSlider)** — This module shows you how to add `centerMode` and `centerPadding` settings from the [slick carousel](https://kenwheeler.github.io/slick/) used by the Slider. Create by [Bruce Denham](https://magentocommeng.slack.com/messages/UA3GYB2KW).

- **[PageBuilderExtensionBanner](https://github.com/magento-devdocs/pagebuilder-examples/tree/master/Example/PageBuilderExtensionBanner)** — This module shows you how to customize an existing content type: the Banner. This is the completed module featured in the [Extend a content type tutorial](https://devdocs.magento.com/page-builder/docs/extend-existing-content-type/overview.html). Created by [Bruce Denham](https://magentocommeng.slack.com/messages/UA3GYB2KW).

- **[PageBuilderQuote](https://github.com/magento-devdocs/pagebuilder-examples/tree/master/Example/PageBuilderQuote)** — This module shows you how to create a content type for a customer testimonial page. This is the completed Quote module featured in the [Create a content type tutorial](https://devdocs.magento.com/page-builder/docs/create-custom-content-type/overview.html). Created by [Bruce Denham](https://magentocommeng.slack.com/messages/UA3GYB2KW).

- **[PageBuilderGrid](https://github.com/magento-devdocs/pagebuilder-examples/tree/master/Example/PageBuilderGrid)** — This module shows you how to create a content type that recreates the layout of the Magento Luma-themed home page using a grid structure with grid items. Created by [Dave Macaulay](https://github.com/davemacaulay). 

- **[PageBuilderFaq](https://github.com/magento-devdocs/pagebuilder-examples/tree/master/Example/PageBuilderFaq)** — This module shows you how to create a content type for an FAQ page that uses an accordion for the questions and answers. Created by [Igor Melnikov](https://github.com/melnikovi).

## Modules Installation

Assuming you have Page Builder 1.0.* already installed and activated, you can install these example modules as you do any other Magento module. 

1. Copy or symlink the `Example` directory into your Magento installation's `app/code` directory, as shown here:

    **To Symlink**:
    ```terminal
    ln -s <Relative_route_to_cloned_Example_directory>
    ```
    
    <img src="examples-install-location.png" alt="Examples installation directory" width="318px"/>
    
2. Enable the modules using the following command:

   ```bash
   bin/magento setup:upgrade
   ```
   
3. Navigate to a Page Builder instance to ensure the example content types appear in the Page Builder panel as shown here:

   <img src="example-content-types.png" alt="Content type examples shown in panel" width="310px"/>
    

## Contributing

We encourage and welcome you to help us keep these examples current by submitting PRs and issues. 
We also welcome your feedback and ideas about creating other code examples to add to this repo. 
