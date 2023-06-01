<?php

/**
 * Qrcode global configuration
 */

return [
    'church_logo' => env('QRCODE_CHURCH_LOGO', 'qrcodes/gracefields.png'),
    'storage_path' => env('QRCODE_STORAGE_PATH', 'app/qrcodes/'),
];
