// This is the recommended way to customize config settings for lazysizes.
// The default config settings are found here: https://github.com/aFarkas/lazysizes#js-api---options
// Examples of a few customizations are shown here.

(function () {
    window.lazySizesConfig = window.lazySizesConfig || {};
    window.lazySizesConfig.loadMode = 1;
    window.lazySizesConfig.expand = 0;

    // These are settings for lazysizes' nativeLoading plugin that supports future native lazyloading.
    // Read more here: https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/native-loading
    window.lazySizesConfig.nativeLoading = {
        setLoadingAttribute: true,
        disableListeners: {
            scroll: true
        },
    };
})();
