# Responsive Columns

This module provides a Page Builder example module that shows how to use breakpoints to create responsive columns. Almost every file in the module is annotated with comments that explain what the code and configurations do, so you can learn how to take full control of Page Builder columns for your content.

## Installation

1. Install the [ResponsiveTheme](../../ResponsiveTheme/README.md). It adds a critical fix to the mobile viewport.

1. Add this module to the `app/code/` directory in your Magento instance.

    ![Responsive Columns Module](responsive-columns-module.png)

1. Run `bin/magento setup:upgrade` to install it.

## What it does

It does quite a bit. I'll add all the details soon. But until then, you can read the comments within the module files to get a pretty good idea of what's going on. Some code is only there to fix bugs in 1.6.0. If that's the case, I point it out in the comments. A good example is the `StageConfigFix` plugin. This fixes a configuration bug with the `stage` configuration for viewports.

**Four main features:**

1. Adds Tablet and a Mobile Small viewports to the default viewports (desktop and mobile).
1. Provides workarounds for four bugs in the latest release 1.6.0.
1. Allows you to set the number of columns per row you want to show for a breakpoint/viewport.
1. Allows you to hide specific columns for a breakpoint/viewport.

This GIF shows how the column sizes can be set on the desktop viewport, and how the mobile viewport (max-width: 768px) keeps the column ratios in a 2-column format. It also shows how columns can be hidden for a breakpoint. The tablet viewport is configured to hide the 4th column. All other viewports show all columns.

![Demo of column control](ColumnsPerRowAndColumnHiding.gif "Columns per row and column hiding")

More docs to come.
