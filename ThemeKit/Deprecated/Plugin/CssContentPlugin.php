<?php

namespace ThemeKit\Deprecated\Plugin;

use Magento\Framework\DataObject;
use Magento\Framework\View\Asset\Repository;
use Magento\PageBuilder\Model\Wysiwyg\DefaultConfigProvider;

class CssContentPlugin
{
    /**
     * @var Repository
     */
    private $assetRepo;

    /**
     * CssContentPlugin constructor.
     * @param Repository $assetRepo
     */
    public function __construct(Repository $assetRepo)
    {
        $this->assetRepo = $assetRepo;
    }

    /**
     * @param DefaultConfigProvider $subject
     * @param $tinyConfig
     * @return DataObject
     */
    public function afterGetConfig(DefaultConfigProvider $subject, $tinyConfig): DataObject
    {
        $settings = $tinyConfig['tinymce4']['content_css'];
        $localTinymceCssUrl = $this->assetRepo->getUrl('ThemeKit_Deprecated/css/source/form/element/tinymce.css');

        array_push($settings, $localTinymceCssUrl);
        \array_splice($settings, 1, 1);

        return $tinyConfig;
    }
}
