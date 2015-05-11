(function ($, Drupal, window, document, undefined) {
   (function ($) {
    Drupal.behaviors.hk_leaflet = {
      attach: function (context, settings) {
        $(document).bind('leaflet.feature', function(e, lFeature, feature) {
          lFeature.on('click', function(e) {
            var lMap = Drupal.settings.leaflet[0].lMap;
            lMap.setView(e.latlng,18,1,.15,true);
            $('.leaflet-popup-content').find('.apart:gt(2)').css("display","none").addClass('toggle');
            var toggleMinus = 'sites/all/themes/hk_theme/images/bullet_toggle_minus.png';
            var togglePlus = 'sites/all/themes/hk_theme/images/bullet_toggle_plus.png';
            var show = Drupal.t("Alle zeigen");
            var hide = Drupal.t("Verbergen");
            $('.tablehead .more').replaceWith('<button class="toggle" data-text-original="Alle zeigen" data-text-swap="Verbergen"><strong class="show">' + show + '</strong></button>');
            $('button.toggle').click(function() {
              $('.apart.toggle,.leaflet-popup-content img,.leaflet-popup-content p').slideToggle();
              var el = $(this);
              el.text() == el.data("text-swap")
                ? el.text(el.data("text-original"))
                : el.text(el.data("text-swap"));
            })
          });
        });
      }
    }
   })(jQuery);
})(jQuery, Drupal, this, this.document);
