<?php

function jt_2019_d7_preprocess_page(&$variables) {
    $variables['logo'] = '/sites/all/themes/jt_2019_d7/images/logo_v10.png';

    if (isset($variables['node']->type)) {
      // If the content type's machine name is "my_machine_name" the file
      // name will be "page--my-machine-name.tpl.php".
      $variables['theme_hook_suggestions'][] = 'page__' . $variables['node']->type;
    }

}

function jt_2019_d7_preprocess_node(&$variables) {
    $variables['display_submitted_by'] = $variables['display_submitted'];
}

?>
