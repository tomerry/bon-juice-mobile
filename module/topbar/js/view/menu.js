(function ($) {
    bonjuice.view.widget_topbar_menu = Backbone.View.extend({

        el: $(".topbar-menu")

        , events: {
            "click .menu": "onmenuclick"
        }

        , onmenuclick: function () {
            var me=this;

            me.$(".topbar-menu-body").toggle();

            me.$("i.menu").toggleClass("rotate");

            $(".viewport").toggle();
        }

    });
})($);