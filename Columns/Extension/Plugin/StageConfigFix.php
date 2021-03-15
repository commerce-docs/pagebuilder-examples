<?php

namespace Columns\Extension\Plugin;

/* ************************************************************************** */
/* This plugin fixes the "stage" configuration in the view.xml configuration. */
/* It also does some error prevention against all stage values set to false.  */
/* ************************************************************************** */

class StageConfigFix
{
    private $desktopViewport = [];

    public function afterGetConfig($subject, $results): array
    {
        $breakpoints = $results['breakpoints'];
        $viewports = $this->getViewports($breakpoints);

        // Protect against all `stage` values being false by returning the desktop viewport regardless.
        if (empty($viewports)) {
            var_dump("The viewports array is empty because all stage settings are false.");
            $desktopViewport = $breakpoints['desktop'];
            $results['viewports'] = $desktopViewport;
        }
        else {
            $results['viewports'] = $viewports;
        }

        // Fixed to look for `default` true from $viewports, *after* the `stage` check, not from $breakpoints as it was.
        $results['defaultViewport'] = $this->getDefaultViewport($viewports);

        return $results;
    }

    private function getViewports(array $breakpoints): array
    {
        $viewports = [];
        foreach ($breakpoints as $name => $breakpoint) {
            // Fixed by removing `isset` so that the value (not the existence) of 'stage' is checked.
            if ($breakpoint['stage']) {
                $viewports[$name] = $breakpoint;
            }
        }
        return $viewports;
    }

    private function getDefaultViewport(array $viewports): string
    {
        if (empty($viewports)) {
            return 'desktop';
        }
        else {
            $keyIndex = array_search(true, array_column($viewports, 'default'));
            return $keyIndex === false ? 'desktop' : array_keys($viewports)[$keyIndex];
        }
    }
}
