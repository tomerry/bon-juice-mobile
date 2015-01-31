(function ($) {

    bonjuice.view.widget_topbar_register = Backbone.View.extend({

        tpl: _.template(__inline("../../tpl/register.tpl.html"))

        , events: {
            "click .login": "onloginclick"
            , "click .close": "oncloseclick"
        }

        , oncloseclick: function () {
            this.$(".topbar-register").hide();
        }

        , onloginclick: function () {
            var me = this;
            me.$(".topbar-register").hide();
            $(document).trigger("topbar:loginclick");
        }


        , initialize: function () {
            this.render();
            this.bind();
        }

        , bind: function () {
            $(document).on("topbar:registerclick", $.proxy(this.onshow, this));
        }

        , onshow: function () {
            this.$(".topbar-register").show();
        }

        , render: function () {
            var me = this;

            me.$el.html($(me.tpl({})))
        }
    });

})($);