(function ($, Drupal, window, document, undefined) {
   (function ($) {
    Drupal.behaviors.hk_leaflet = {
      attach: function (context, settings) {
        $(document).bind('leaflet.feature', function(e, lFeature, feature) {
          lFeature.on('click', function(e) {
            var lMap = Drupal.settings.leaflet[0].lMap;
            lMap.setView(e.latlng,18,1,.15,true);
            var n = $(".leaflet-popup-content .apart").length;
            if ( n > 3) {
                        $('.leaflet-popup-content').find('.apart:gt(2)').css("display","none").addClass('toggle');
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
      }
    }
   })(jQuery);
})(jQuery, Drupal, this, this.document);


      //     /* Transform not working on PDF creation*/
      // var transform=$(".page-node-expose .leaflet-map-pane").find(".leaflet-tile-container>img").css("transform");
      // var comp=transform.split(",");
      // var mapleft=parseFloat(comp[4]);
      // var maptop=parseFloat(comp[5]);
      // $(".page-node-expose .leaflet-map-pane").find(".leaflet-tile-container>img").css({
      //     "transform":"none",
      //     "left":mapleft,
      //     "top":maptop,
      // });