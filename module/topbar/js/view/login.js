(function ($) {

    bonjuice.view.widget_topbar_login = bonjuice.view.extend({

        el: $(".topbar-login")

        , events: {
            "click .reget": "onregetclick"
            , "click .register": "onregisterclick"
        }

        , init: function () {
            this.bind();
        }

        , bind: function () {
            $(document).on("topbar:loginclick", $.proxy(this.onshow, this));
        }

        , onshow: function () {
            this.show();
        }

        , onregetclick: function () {
            var me = this;
            me.hide();
            $(document).trigger("topbar:regetclick");
        }

        , onregisterclick: function () {
            var me = this;
            me.hide();
            $(document).trigger("topbar:registerclick");
        }
    });

})($);