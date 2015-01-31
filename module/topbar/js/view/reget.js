(function ($) {

    bonjuice.view.widget_topbar_reget = Backbone.View.extend({

        tpl: _.template(__inline("../../tpl/reget.tpl.html"))

        , events: {
            "click .close": "oncloseclick"
        }

        , oncloseclick: function () {
            this.$(".topbar-reget").hide();
        }

        , initialize: function () {
            this.render();
            this.bind();
        }

        , bind: function () {
            $(document).on("topbar:regetclick", $.proxy(this.onshow, this));
        }

        , onshow: function () {
            this.$(".topbar-reget").show();
        }

        , render: function () {
            var me = this;

            me.$el.html($(me.tpl({})))
        }
    });

})($);