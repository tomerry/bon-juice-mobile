(function ($) {

    bonjuice.view.widget_topbar_register = Backbone.View.extend({

        el: $(".topbar-register")

        , events: {
            "click .login": "onloginclick"
        }

        , onloginclick: function () {
            var me = this;
            me.hide();
            $(document).trigger("topbar:loginclick");
        }


        , initialize: function () {
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