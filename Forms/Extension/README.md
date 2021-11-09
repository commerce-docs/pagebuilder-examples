# PageBuilder- Base Form Extensions

This example module shows you how to remove fields and fieldsets from Page Builder's built-in forms. Page Builder uses three forms to provide fieldsets and fields to all its content types:

*  `Magento/PageBuilder/view/adminhtml/ui_component/pagebuilder_base_form.xml`
*  `Magento/PageBuilder/view/adminhtml/ui_component/pagebuilder_base_form_with_background_attributes.xml`
*  `Magento/PageBuilder/view/adminhtml/ui_component/pagebuilder_base_form_with_background_video.xml`

The `pagebuilder_base_form.xml` provides the Advanced fieldset and all its fields (such as alignments, borders, margins and paddings).

The `pagebuilder_base_form_with_background_attributes.xml` form inherits from the `pagebuilder_base_form` and adds the Background fieldset with all its fields (such as background images, sizes, and positions).

Finally, the `pagebuilder_base_form_with_background_video.xml` form inherits from the `pagebuilder_base_form_with_background_attributes` and adds the Background Video fieldset with all its fields (such as video sources, sizes, and positions).

As this example shows, you can _globally_ remove the fields or fieldsets from these base forms by adding same-named XML files to your module. Within these files, you simply add the field or fieldset you want to remove by nesting the `componentDisabled` setting. For example, to remove the border radius field:

```xml
<field name="border_radius">
    <argument name="data" xsi:type="array">
        <item name="config" xsi:type="array">
            <item name="componentDisabled" xsi:type="boolean">true</item>
        </item>
    </argument>
</field>
```

## Installation and usage

These steps assume you have already cloned the `pagebuilder-examples` repo to the root of your Magento instance, as described in [Installing the example modules](../../README.md):

1. Navigate to to the `app/code/` directory and create a symlink using the following command:

    ```bash
    ln -s ../../pagebuilder-examples/Forms
    ```

1. From the Magento root directory, run the `setup:upgrade` command to install and enable the module:

   ```bash
   bin/magento setup:upgrade
   ```

1. Navigate to a CMS page, open the editor for an existing content type (Row, for example) and view the altered form with the removed fields and fieldsets.

## Author

[Bruce Denham](https://github.com/bdenham). Contact us on the Slack [#pagebuilder channel](https://slack.com/app_redirect?channel=pagebuilder) for questions specific to this example.

## Feedback

We encourage and welcome you to help us keep these examples current by submitting Issues and Pull Requests. We also welcome your feedback and ideas on other code examples you would like to see added to this repo.
