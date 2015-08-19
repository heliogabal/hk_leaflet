(function ($, Drupal, window, document, undefined) {
   (function ($) {
    Drupal.behaviors.hk_leaflet = {
      attach: function (context, settings) {

        // When clicking on a map marker, zoom to level 18 and open the popup;
        // When more than 4 apartments in popup, hide the rest and generate a button to toggle their visibility while hiding image and text;
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

      // On the frontpage, create the Search API SOLR facets as a jquery ui dialog
      $( ".front #block-views-exp-karten-map-page, .front #search").dialog({
            height: "auto",
            minHeight: "120",
            width: "auto",
            resizable: "false",
            closeOnEscape: "true",
            //hide: { effect: "explode", duration: "1000" },
            //show: { effect: "explode", duration: "1000" },
            //hide: "true",
            show: {
              effect:   "fade",
              duration: 500
            },
            hide: {
              effect:   "fade",
              duration: 500
            },
            position: { my: "center bottom", at: "center-180 bottom-80", collision: "fit flip", of: "#page" },
            beforeClose: function () {
              $(this).dialog("widget").effect("transfer", {
                  to: $(".icon-hk-icon-search"),
                  className: "ui-effects-transfer"
              }, 500);
            }
          });

      // On the frontpage map, when you click on the Search icon, toggle the search dialog from previous function
      $( '#block-menu-menu-service-menu .menu li:nth-child(2)').click(function(e) {
        var dlg = $(".front #block-views-exp-karten-map-page, .front #search");

        // Show or hide?
        if (dlg.is(":visible")) {
          // Hide: Kick off the transfer effect and close the
          // dialog. The transfer will run simultaneously
          // with the fade we configured above
          dlg.effect("transfer", {
            to: $(".icon-hk-icon-search"),
            className: "ui-effects-transfer",
            duration: 500
          }).dialog("close");
        }
        else {
          // Show: Show the dialog, then kick off a transfer
          // effect transferring the button to the dialog's
          // widget. Again the transfer and fade run simultaneously
          // and so work together.
          dlg.dialog("open");
          $(this).effect("transfer", {
            to: dlg.dialog("widget"),
            className: "ui-effects-transfer"
          }, 500);
        }
        e.preventDefault();
      });

      // Toggle Search on buy page
      // $(".page-buy #block-menu-menu-service-menu .menu li:nth-child(2)").click(function(e) {
      //   $(".page-buy #search").toggle();
      //   e.preventDefault();
      // });

       }
    }
   })(jQuery);
})(jQuery, Drupal, this, this.document);
