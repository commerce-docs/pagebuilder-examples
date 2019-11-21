# Magento Page Builder - Custom Button Types

This is an example module for creating custom button types for all Page Builder content types that use buttons: Button, Banner, and Slide.

![Custom Button Types](custom-button-types.gif "Custom Button Types")

## Installation and usage

To install this module:

1. Copy the `PageBuilderButtonTypes` directory and all its contents into a new (or your existing) `Example` vendor directory: `<magento-root>/app/code/Example`.
2. Command line into your `<magento-root>` directory and run `bin/magento setup:upgrade` to install the extension.
3. Navigate to a CMS Page and drag a Button onto the stage.
4. Open the Button's editor and select the new Hollow button type provided by this example.

## Storefront theme

To see the custom button types render on your storefront, you will need to add the CSS from adminhtml (`_button.less`) to your own theme. For this example, we added a `_button.less` file to our own theme, as shown here:

![Frontend Theme for button type](front-end-theme.png "Frontend Theme for Custom Button Types")

If you want to create something similar to complete this example, here's the `less` for the theme's `_button.less` file shown above.

```scss
[data-content-type="button-item"], [data-content-type="banner"], [data-content-type="slide"] {
    a,
    button,
    div {
        &.pagebuilder-button-hollow {
            .lib-link-as-button();
            .lib-button(@_button-margin: 40px 10px 10px 0);
            .lib-button-l();
            .lib-css(border-radius, 0);
            box-shadow: none;
        }

        &.pagebuilder-button-primary, &.pagebuilder-button-secondary,
        &.pagebuilder-button-link, &.pagebuilder-button-hollow {
            border-radius: 0;
            -moz-border-radius: 0;
            -webkit-border-radius: 0;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.42;
            font-family: Poppins, sans-serif;
            padding: 14px 36px;
            cursor: pointer;

            &:hover {
                border: none;
            }
        }

        &.pagebuilder-button-hollow {
            border: 2px solid #333333;
            padding: 20px 36px 16px 36px;
            margin: 30px 0 10px 0;
            background: transparent;
            color: #333333;

            &:hover {
                background: #DDDDDD;
                border: 2px solid #333333;
            }
        }

        &.pagebuilder-button-primary {
            border: none;
            background: #1979C3;

            &:hover {
                background: #025FA7;
            }
        }

        &.pagebuilder-button-secondary {
            border: none;
            background: #F0F0F0;

            &:hover {
                background: #DDDDDD;
            }
        }
    }
}
```

## Feedback

We encourage and welcome you to help us keep these examples current by submitting pull requests and issues. 
We also welcome your feedback and ideas on other code examples you would like to see added to this repo. 

## Slack
You can join our [#pagebuilder channel](https://magentocommeng.slack.com/messages/CHB455HPF), within [magentocommeng.slack.com](https://magentocommeng.slack.com/), to post your questions to the Page Builder community.
