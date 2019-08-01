<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/garland.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to main-menu administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see template_process()
 */
?>

<div id="header_wrapper">

  <?php if ($page['user_menu']): ?>
  <div class="user-menu-wrapper">
    <div class="full-wrap">
      <?php print render($page['user_menu']) ?>
    </div>
  </div>
  <?php endif; ?>

  <div id="inner_header_wrapper">

    <header id="header" role="banner">

      <?php if ($page['accessibility_left'] || $page['accessibility_right']): ?>
      <div class="accessibility">
        <?php print render($page['accessibility_left']) ?>
        <?php print render($page['accessibility_right']) ?>
      </div>
      <?php endif; ?>

      <div class="top_left">
        <?php if ($logo): ?>
          <div id="logo"><a href="/ouvidoria" title="<?php print t('Home'); ?>"><img src="/sites/all/themes/jt_2019_d7/images/ouvidoria/OUV_LOGO.png" alt="Tribunal Regional do Trabalho da 8ª Região - Pará e Amapá" /></a></div>
        <?php endif; ?>
        <?php if ($site_slogan): ?>
          <h1 id="site-title">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
            <div id="site-description"><?php print $site_slogan; ?></div>
          </h1>
        <?php endif; ?>
      </div>
<!--
      <p style="float: left; color: white; font-size: 21px; position: absolute; top: 62px; left: 40%; background-color: blue; padding: 3px; opacity: 0.65; border-radius: 4px;">DESENVOLVIMENTO</p>
-->

      <div class="top_right">
        <?php if (theme_get_setting('social_links', 'jt_2019_d7')): ?>
          <div class="social-icons">
<!--
           <ul>
            <li><a class="instagram" title="Instagram do TRT8" href="<?php echo theme_get_setting('instagram_profile_url', 'jt_2019_d7'); ?>" target="_blank" rel="me">Instagram</a></li>
            <li><a class="twitter" title="Twitter do TRT8" href="<?php echo theme_get_setting('twitter_profile_url', 'jt_2019_d7'); ?>" target="_blank" rel="me">Twitter</a></li>
            <li><a class="fb" title="Facebook do TRT8" href="<?php echo theme_get_setting('facebook_profile_url', 'jt_2019_d7'); ?>" target="_blank" rel="me">Facebook</a></li>
            <li><a class="flickr" title="Flickr do TRT8" href="<?php echo theme_get_setting('flickr_profile_url', 'jt_2019_d7'); ?>" target="_blank" rel="me">Flickr</a></li>
            <li><a class="youtube" title="Youtube do TRT8" href="<?php echo theme_get_setting('youtube_profile_url', 'jt_2019_d7'); ?>" target="_blank" rel="me">Youtube</a></li>
            <li><a class="rss" title="RSS das notícias do TRT8" href="<?php print $front_page; ?>rss.xml" target="_blank" rel="me">RSS</a></li>
           </ul>
-->
          </div>
        <?php endif; ?>
        <?php print render($page['top_right']) ?>
      </div>

    <div class="clear"></div>

    </header>

  </div>
<!--
  <div class="menu_wrapper">
    <div class="menu_inner_wrap clearfix">
      
      <?php print render($page['search']) ?>

      <nav id="main-menu"  role="navigation">
        <a class="nav-toggle" href="#">Menu</a>
        <div class="menu-navigation-container">
          <?php 
            $main_menu_tree = menu_tree(variable_get('menu_main_links_source', 'main-menu')); 
            print drupal_render($main_menu_tree);
          ?>
        </div>
        <div class="clear"></div>
      </nav>
      
    </div>
  </div>
-->
</div>

<?php if ($page['slideshow']): ?>
  <?php print render($page['slideshow']); ?>
<?php endif; ?>

  <div id="container">

  <div class="container-wrap">

        <div class="content-sidebar-wrap">

        <div id="content">
          <?php if (theme_get_setting('breadcrumbs', 'jt_2019_d7')): ?><div id="breadcrumbs"><?php if ($breadcrumb): print $breadcrumb; endif;?></div><?php endif; ?>
          
            <?php if ($is_front): ?>
         
              <?php if ($page['top_first'] || $page['top_second'] || $page['top_third']): ?> 
                <div id="top-area" class="clearfix">
                  <?php if ($page['top_first']): ?>
                  <div class="column first"><?php print render($page['top_first']); ?></div>
                  <?php endif; ?>
                  <?php if ($page['top_second']): ?>
                  <div class="column"><?php print render($page['top_second']); ?></div>
                  <?php endif; ?>
                  <?php if ($page['top_third']): ?>
                  <div class="column"><?php print render($page['top_third']); ?></div>
                  <?php endif; ?>
                </div>
              <?php endif; ?>

          <?php endif; ?>

          <section id="post-content" role="main">
            <?php print $messages; ?>
            <?php print render($title_prefix); ?>
            <?php if ($title): ?><h1 class="page-title"><?php print $title; ?></h1><?php endif; ?>
            <?php print render($title_suffix); ?>
            <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper"><?php print render($tabs); ?></div><?php endif; ?>
            <?php print render($page['help']); ?>
            <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
            <?php print render($page['content']); ?>
          </section> <!-- /#main -->
        </div>
      
        <?php if ($page['sidebar_first']): ?>
          <aside id="sidebar-first" role="complementary">
            <?php print render($page['sidebar_first']); ?>
          </aside>  <!-- /#sidebar-first -->
        <?php endif; ?>
      
        </div>

        <?php if ($page['sidebar_second']): ?>
          <aside id="sidebar-second" role="complementary">
            <?php print render($page['sidebar_second']); ?>
          </aside>  <!-- /#sidebar-first -->
        <?php endif; ?>

        <?php if ($is_front): ?>

        <div id="footer_wrapper" class="footer_block bottom_widget">
          <?php if ($page['bottom_widget_1'] || $page['bottom_widget_2'] || $page['bottom_widget_3']): ?> 
            <div id="footer-area" class="clearfix">
              <?php if ($page['bottom_widget_1']): ?>
              <div class="column"><?php print render($page['bottom_widget_1']); ?></div>
              <?php endif; ?>
              <?php if ($page['bottom_widget_2']): ?>
              <div class="column"><?php print render($page['bottom_widget_2']); ?></div>
              <?php endif; ?>
              <?php if ($page['bottom_widget_3']): ?>
              <div class="column"><?php print render($page['bottom_widget_3']); ?></div>
              <?php endif; ?>
            </div>
          <?php endif; ?>
        </div>

        <?php endif; ?>

    </div>
  
</div>

<div id="footer">
  <?php if ($page['footer_first'] || $page['footer_second'] || $page['footer_third'] || $page['footer_forth']): ?> 
    <div id="footer_wrapper">
      <div id="footer-area" class="clearfix">
        <?php if ($page['footer_first']): ?>
        <div class="column"><?php print render($page['footer_first']); ?></div>
        <?php endif; ?>
        <?php if ($page['footer_second']): ?>
        <div class="column"><?php print render($page['footer_second']); ?></div>
        <?php endif; ?>
        <?php if ($page['footer_third']): ?>
        <div class="column"><?php print render($page['footer_third']); ?></div>
        <?php endif; ?>
        <?php if ($page['footer_forth']): ?>
        <div class="column"><?php print render($page['footer_forth']); ?></div>
        <?php endif; ?>
      </div>
    </div>
  <?php endif; ?>
  
  <?php if ($page['footer']): ?>
    <?php print render($page['footer']) ?>
  <?php endif; ?>
      
  <?php if ($page['copyright']): ?>
    <div id="copyright">
      <?php print render($page['copyright']) ?>
      <div class="clear"></div>
    </div>
  <?php endif; ?>

</div>
