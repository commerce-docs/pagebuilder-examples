# Page Builder - Custom Homepage Grid

This module serves as an example for how you can create relatively complex content types within the new Page Builder framework. This module was created to show how we can easily rebuild the Luma sample content using Page Builder.

This module contains two content types, both with different purposes:
- Homepage Grid
    - This is responsible for housing all the grid items to build up the final grid.
    - By design this content type can only contain grid items, and is fixed to having 5 children for our specific rigid grid.
- Homepage Grid Item
    - This acts very much like a row or a column, housing the internal content and providing various background options.
    - This can contain any content type available in the framework (providing their configuration settings allow it) to generate rich content.
    
### Example
Within this module we provide the master storage format contents for the luma homepage that's been presented alongside this module.

**Admin View:**
![Luma Homepage Admin](examples/luma_homepage_admin.png "Luma Homepage Admin")

**Storefront View:**
![Luma Homepage Storefront](examples/luma_homepage_storefront.png "Luma Homepage Storefront")

This example can be imported into any Magento 2.3+ instance with Page Builder installed alongside this module. This can be done by updating the entities content to that provided in `examples/luma_homepage.html`.
