(function ($) {

    bonjuice.view.widget_topbar_menu = bonjuice.view.extend({

        el: $(".topbar-menu")

        , events: {
            "click .menu": "onmenuclick"
        }

        , init: function () {
            this.isShown = false;
        }

        , onmenuclick: function () {
            var me = this;

            this.isShown = !this.isShown;

            me.$(".topbar-menu-body").toggle();

            me.$("i.menu").toggleClass("rotate");


            this.isShown ? $(".viewport").hide() : $(".viewport").show();
        }

    });

})($);