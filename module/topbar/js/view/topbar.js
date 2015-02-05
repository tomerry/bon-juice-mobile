(function ($) {
    bonjuice.view.widget_topbar = bonjuice.view.extend({

        el: "#widget_topbar"

        , init: function () {
            this.canClick = true;
            this.render();
        }

        , events: {
            "click .login": "onloginclick"
            , "click .register": "onregisterclick"
            , "tap .close": "oncloseclick"
        }

        , oncloseclick: function () {
            var me = this;
            if (!me.canClick)
                return;
            me.$(".section").hide();
            me.$(".topbar-mask").hide();
            $(".viewport").show();
            me.canClick = false;
            setTimeout(function () {
                me.canClick = true;
            }, 500);
        }


        , onregisterclick: function () {
            var me = this;
            if (!me.canClick)
                return;
            me.$(".topbar-mask").show();
            $(".viewport").hide();
            $(document).trigger("topbar:registerclick");
        }

        , onloginclick: function () {
            var me = this;
            if (!me.canClick)
                return;
            me.$(".topbar-mask").show();
            $(".viewport").hide();
            $(document).trigger("topbar:loginclick");
        }

        , render: function () {
            var me = this;
            var menu = new bonjuice.view.widget_topbar_menu();
            var share = new bonjuice.view.widget_topbar_share();
            var login = new bonjuice.view.widget_topbar_login();
            var register = new bonjuice.view.widget_topbar_register();
            var reget = new bonjuice.view.widget_topbar_reget();
        }

    });
})($);