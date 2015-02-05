(function ($) {

    bonjuice.view.widget_topbar_register = bonjuice.view.extend({

        el: $(".topbar-register")

        , events: {
            "click .login": "onloginclick"
        }

        , onloginclick: function () {
            var me = this;
            me.hide();
            $(document).trigger("topbar:loginclick");
        }


        , init: function () {
            this.bind();
        }

        , bind: function () {
            $(document).on("topbar:registerclick", $.proxy(this.onshow, this));
        }

        , onshow: function () {
            this.show();
        }

    });

})($);