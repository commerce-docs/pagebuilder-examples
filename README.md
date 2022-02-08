# Page Builder Examples

This repo is a collection of extended and custom content type modules created to teach you how to develop for Page Builder. The modules are designed to help you learn by example, and teach you best practices for extending and creating new content types for Page Builder.

**NOTE:**
The Page Builder team members created these modules for educational purposes. They are not fully tested or guaranteed to work perfectly. However, we will do our best to improve these examples and keep them updated with the latest releases of Page Builder.

## Extension Modules

-  **[Banner Extension](BannerExt/Extension/)** — This module shows you how to customize an existing content type: the Banner. This is the completed module featured in the documentation topic [Extend an appearance](https://devdocs.magento.com/page-builder/docs/content-types/extend/extend-appearances.html). Created by [Bruce Denham](https://github.com/bdenham).

-  **[Banner Appearance](BannerApp/Appearance/)** — This module shows you how to add a new appearance to the Banner. This is the completed module featured in the documentation topic [Add appearances](https://devdocs.magento.com/page-builder/docs/content-types/extend/add-appearances.html). Created by [Bruce Denham](https://github.com/bdenham).

-  **[Forms Extension](Forms/Extension/)** — This module shows you how to remove fields and fieldsets from Page Builder's built-in forms. Created by [Bruce Denham](https://github.com/bdenham).

-  **[Button Extension](Button/Extension/)** — This module shows how to add custom button types. Created by [Bruce Denham](https://github.com/bdenham).

-  **[Columns Extension](Columns/Extension/)** — This module shows how to use breakpoints to control the responsive layout of columns. Created by [Bruce Denham](https://github.com/bdenham).

-  **[Deactivate PageBuilder](Deactivate/PageBuilder/)** — This example module shows you how to disable Page Builder for a particular page in Magento, specifically Pages, Blocks, and Dynamic Blocks. Created by [Bruce Denham](https://github.com/bdenham).

-  **[Image LazyLoading](Image/LazyLoading/)** — This module shows how to add lazy loading behavior to the Image content type. For this example, we use the [lazysizes](https://github.com/aFarkas/lazysizes) loader. Created by [Bruce Denham](https://github.com/bdenham).

-  **[Slider Extension](Slider/Extension/)** — This module shows you how to add `centerMode` and `centerPadding` settings from the [slick carousel](https://kenwheeler.github.io/slick/) used by the Slider. Create by [Bruce Denham](https://github.com/bdenham).

-  **[Text Extension](Text/Extension/)** — This module shows you how to customize the Page Builder's Text toolbar, integrate your own theme's typography, and add TinyMCE's `code` plugin to the toolbar so you can view the HTML code directly. Created by [Bruce Denham](https://github.com/bdenham).

## Custom Modules

-  **[Custom Quote](Quote/Custom/)** — This module shows you how to create a content type for a customer testimonial. This is the completed Quote module featured in the documentation tutorial: [Creating content types](https://devdocs.magento.com/page-builder/docs/content-types/create/introduction.html). Created by [Bruce Denham](https://github.com/bdenham).

-  **[Custom Homepage Grid](Grid/Custom/)** — This module shows you how to create a content type that recreates the layout of the Magento Luma-themed home page using a grid structure with grid items. Created by [Dave Macaulay](https://github.com/davemacaulay).

-  **[Custom FAQ](FAQ/Custom/)** — This module shows you how to create a content type for an FAQ page that uses an accordion for the questions and answers. Created by [Igor Melnikov](https://github.com/melnikovi).

## Installing the example modules

The best way to explore and use these example modules in Page Builder is to clone this repo into the root of your Magento instance, then symlink one or more modules into the `app/code/` directory, and run `setup:upgrade` to install. Step-by-step instructions follow.

1. Clone this repo (`pagebuilder-examples`) to the root of your Magento instance:

    ```bash
    git clone https://github.com/magento-devdocs/pagebuilder-examples.git
    ```

1. Navigate to the `app/code/` directory (or create one as needed), then use the symlink command to add one or more of the example modules you want to add to your instance. For example, to install the `Columns` module, use the following command from within the `app/code/` directory:

    ```bash
    ln -s ../../pagebuilder-examples/Columns
    ```

    This creates a symlink in `app/code/` called `Columns`, which references the `pagebuilder-examples/Columns` module.

    **To unlink a module**: Use the `unlink` (macOS) or `rm` command, followed by the path to the symlink. This example unlinks the `Columns` module from the `app/code/` directory:

    ```bash
    rm Columns
    ```

    Then you can run `bin/magento setup:upgrade` again to remove it from your Magento instance.

1. From the Magento root directory, run the `setup:upgrade` command to install and enable the symlinked modules:

   ```bash
   bin/magento setup:upgrade
   ```

1. Navigate to a CMS page and start using the module(s).

## Contact us on Slack
You can join our [#pagebuilder channel](https://magentocommeng.slack.com/messages/CHB455HPF), within [magentocommeng.slack.com](https://magentocommeng.slack.com/), to post your questions to the Page Builder community.

## Feedback

We encourage and welcome you to help us keep these examples current by submitting Issues and Pull Requests. We also welcome your feedback and ideas on other code examples you would like to see added to this repo.
