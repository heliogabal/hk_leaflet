(function ($, Drupal, window, document, undefined) {
(function ($) {
  Drupal.behaviors.hk_leaflet = {
    attach: function (context, settings) {
      $(document).bind('leaflet.feature', function(e, lFeature, feature) {
        lFeature.on('click', function(e) {
          var lMap = Drupal.settings.leaflet[0].lMap;
          lMap.setView(e.latlng,18,1,.15,true);
          $('.apart').slice(3).css("display","none");
        var toggleMinus = 'sites/all/themes/hk_theme/images/bullet_toggle_minus.png';
        var togglePlus = 'sites/all/themes/hk_theme/images/bullet_toggle_plus.png';
        var show = Drupal.t("Show All");
        var hide = Drupal.t("Hide");
        })
      });
/*      $(document).bind('submit','#edit-submit-karten', function(e) {
          var lMap = Drupal.settings.leaflet[0].lMap;
          lMap.fitBounds(e.latlng,16,.5,.25,true);
              });*/
    }
  }
})(jQuery);
})(jQuery, Drupal, this, this.document);
