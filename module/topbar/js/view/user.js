(function ($) {
    bonjuice.view.widget_topbar_user = Backbone.View.extend({

        tpl: _.template(__inline("../../tpl/user.tpl.html"))

        , events: {
            "click .login": "onloginclick"
            , "click .register": "onregisterclick"
            , "click .close": "oncloseclick"
        }

        , oncloseclick: function () {
            var me = this;
            me.$(".topbar-user-mask").hide();
        }

        , initialize: function () {
            this.render();
        }

        , onregisterclick: function () {
            var me = this;
            me.$(".topbar-user-mask").show();
            $(document).trigger("topbar:registerclick");
        }

        , onloginclick: function () {
            var me = this;
            me.$(".topbar-user-mask").show();
            $(document).trigger("topbar:loginclick");
        }

        , render: function () {
            var me = this;

            me.$el.html($(me.tpl({})));

            var login = new bonjuice.view.widget_topbar_login();
            me.$(".topbar-login-wrapper").append(login.$el);

            var register = new bonjuice.view.widget_topbar_register();
            me.$(".topbar-register-wrapper").append(register.$el);

            var reget = new bonjuice.view.widget_topbar_reget();
            me.$(".topbar-reget-wrapper").append(reget.$el);
        }

    });
})($);