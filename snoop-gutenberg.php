<?php

/**
 * Plugin Name: Кастомные блоки для редактора Gutenberg
 * Description: Кастомные блоки для редактора Gutenberg
 * Plugin URI:
 * Author URI:
 * Author:      Snooper7
 * Version:     1.0
 *
 * Text Domain: ID перевода, указывается в load_plugin_textdomain()
 * Domain Path: Путь до файла перевода.
 * Requires at least: 2.5
 * Requires PHP: 5.4
 *
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 *
 * Network:     Укажите "true" для возможности активировать плагин для сети Multisite.
 * Update URI: https://example.com/link_to_update
 */

defined('ABSPATH') || exit;

add_action( 'enqueue_block_editor_assets', 'snoop_block_assets');

function snoop_block_assets () {

    wp_enqueue_script(
        'snoop-block',
        plugin_dir_url( __FILE__ ) . 'assets/block.js',
        array('wp-blocks', 'wp-element', 'wp-components'),
        filemtime( dirname(__FILE__) . '/assets/block.js')
    );

    wp_enqueue_style(
        'snoop-block-css',
        plugin_dir_url( __FILE__ ) . 'assets/block.css',
        array(),
        filemtime( dirname(__FILE__) . '/assets/block.css')
    );

}

add_action( 'wp_enqueue_script', function(){

    wp_enqueue_style(
        'snoop-block-css',
        plugin_dir_url( __FILE__ ) . 'assets/block.css',
        array(),
        filemtime( dirname(__FILE__) . '/assets/block.css')
    );

} );