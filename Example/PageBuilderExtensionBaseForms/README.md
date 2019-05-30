# PageBuilderExtensionBaseForms

This example module shows you how to remove fields and fieldsets from Page Builder's built-in forms. Page Builder uses two forms to provide fieldsets and fields to all its content types:

* `Magento/PageBuilder/view/adminhtml/ui_component/pagebuilder_base_form.xml`
* `Magento/PageBuilder/view/adminhtml/ui_component/pagebuilder_base_form_with_background_attributes.xml`

The `pagebuilder_base_form.xml` provides the Advanced fieldset and all its fields (such as alignments, borders, margins and paddings).
The `pagebuilder_base_form_with_background_attributes.xml` provides the Background fieldset and all its fields (such as background images, sizes, and positions).

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

To install this extension module:

1. Copy the `PageBuilderExtensionBaseForms` directory and all its contents into a new (or your existing) `Example` vendor directory: `<magento-root>/app/code/Example`.
2. Command line into your `<magento-root>` directory and run `bin/magento setup:upgrade` to install the extension.
3. Navigate to a Page Builder instance, open the editor for an existing content type (Row) and view the altered form with the removed fields / fieldsets.

## Feedback

We encourage and welcome you to help us keep these examples current by submitting pull requests and issues. 
We also welcome your feedback and ideas on other code examples you would like to see added to this repo. 

## Slack
You can join our [#pagebuilder channel](https://magentocommeng.slack.com/messages/CHB455HPF), within [magentocommeng.slack.com](https://magentocommeng.slack.com/), to post your questions to the Page Builder community.
