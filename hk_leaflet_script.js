(function ($, Drupal, window, document, undefined) {
   (function ($) {
    Drupal.behaviors.hk_leaflet = {
      attach: function (context, settings) {
        $(document).bind('leaflet.feature', function(e, lFeature, feature) {
          lFeature.on('click', function(e) {
            var lMap = Drupal.settings.leaflet[0].lMap;
            lMap.setView(e.latlng,18,1,.15,true);
            var n = $(".leaflet-popup-content .apart").length;
            if ( n > 4) {
                        $('.leaflet-popup-content').find('.apart:gt(3)').css("display","none").addClass('toggle');
                        var toggleMinus = 'sites/all/themes/hk_theme/images/bullet_toggle_minus.png';
                        var togglePlus = 'sites/all/themes/hk_theme/images/bullet_toggle_plus.png';
                        var show = Drupal.t("Show all");
                        var hide = Drupal.t("Hide");
                        $('.tablehead .more').replaceWith('<button class="toggle" data-text-original="' + show + '" data-text-swap="' + hide + '"><strong class="show">' + show + '</strong></button>');
                        $('button.toggle').click(function() {
                          $('.apart.toggle,.leaflet-popup-content img,.leaflet-popup-content p').slideToggle();
                          var el = $(this);
                          el.text() == el.data("text-swap")
                            ? el.text(el.data("text-original"))
                            : el.text(el.data("text-swap"));
                        })
                      }
          });
        });
      $( ".front #block-views-exp-karten-map-page, .front #search").dialog({
            height: "auto",
            minHeight: "120",
            width: "auto",
            resizable: "false",
            closeOnEscape: "true",
            hide: { effect: "explode", duration: "1000" },
            //hide: "false",
            position: { my: "center bottom", at: "center-180 bottom-80", collision: "fit flip", of: "#page" }
          });
      $( '#block-menu-menu-service-menu .menu li:nth-child(2)').click(function(e) {
          $( ".ui-dialog,#block-views-exp-karten-kaufen,#block-views-exp-karten-mieten").toggle();
            e.preventDefault();
          });
      }
    }
   })(jQuery);
})(jQuery, Drupal, this, this.document);
