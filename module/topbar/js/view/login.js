(function ($) {

    bonjuice.view.widget_topbar_login = Backbone.View.extend({
        tpl: _.template(__inline("../../tpl/login.tpl.html"))

        , events: {
            "click .reget": "onregetclick"
            , "click .register": "onregisterclick"
            , "click .close": "oncloseclick"
        }

        , oncloseclick: function () {
            this.$(".topbar-login").hide();
        }

        , initialize: function () {
            this.render();
            this.bind();
        }

        , bind: function () {
            $(document).on("topbar:loginclick", $.proxy(this.onshow, this));
        }

        , onshow: function () {
            this.$(".topbar-login").show();
        }

        , onregetclick: function () {
            var me = this;
            me.$(".topbar-login").hide();
            $(document).trigger("topbar:regetclick");
        }

        , onregisterclick: function () {
            var me = this;
            me.$(".topbar-login").hide();
            $(document).trigger("topbar:registerclick");
        }


        , render: function () {
            var me = this;

            me.$el.html($(me.tpl({})))
        }
    });

})($);