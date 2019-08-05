<?php
/**
 * Implements hook_form_FORM_ID_alter().
 *
 * @param $form
 *   The form.
 * @param $form_state
 *   The form state.
 */
function trt8_pas_form_system_theme_settings_alter(&$form, &$form_state) {
  
  $form['prof_settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('Professional Theme Settings'),
    '#collapsible' => FALSE,
    '#collapsed' => FALSE,
  );
  $form['prof_settings']['breadcrumbs'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show breadcrumbs in a page'),
    '#default_value' => theme_get_setting('breadcrumbs','trt8_pas'),
    '#description'   => t("Check this option to show breadcrumbs in page. Uncheck to hide."),
  );
  $form['prof_settings']['top_social_link'] = array(
    '#type' => 'fieldset',
    '#title' => t('Social links in header'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['prof_settings']['top_social_link']['social_links'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show social icons (Facebook, Twitter and RSS) in header'),
    '#default_value' => theme_get_setting('social_links', 'trt8_pas'),
    '#description'   => t("Check this option to show twitter, facebook, rss icons in header. Uncheck to hide."),
  );
  $form['prof_settings']['top_social_link']['twitter_profile_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Twitter URL'),
    '#default_value' => theme_get_setting('twitter_profile_url', 'trt8_pas'),
    '#description' => t("Enter your Twitter profile URL."),
  );
  $form['prof_settings']['top_social_link']['facebook_profile_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Facebook URL'),
    '#default_value' => theme_get_setting('facebook_profile_url', 'trt8_pas'),
    '#description' => t("Enter your Facebook profile URL."),
  );
  $form['prof_settings']['top_social_link']['gplus_profile_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Gplus URL'),
    '#default_value' => theme_get_setting('gplus_profile_url', 'trt8_pas'),
    '#description' => t("Enter your Gplus profile URL."),
  );
  $form['prof_settings']['top_social_link']['linkedin_profile_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Linkedin URL'),
    '#default_value' => theme_get_setting('linkedin_profile_url', 'trt8_pas'),
    '#description' => t("Enter your Linkedin profile URL."),
  );
  $form['prof_settings']['top_social_link']['pinterest_profile_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Pinterest URL'),
    '#default_value' => theme_get_setting('pinterest_profile_url', 'trt8_pas'),
    '#description' => t("Enter your Linkedin Pinterest URL."),
  );
  $form['prof_settings']['top_social_link']['vimeo_profile_url'] = array(
    '#type' => 'textfield',
    '#title' => t('Vimeo URL'),
    '#default_value' => theme_get_setting('vimeo_profile_url', 'trt8_pas'),
    '#description' => t("Enter your Vimeo profile URL."),
  );

}


