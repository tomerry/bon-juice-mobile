(function ($) {
    bonjuice.view.widget_topbar_share= Backbone.View.extend({

        tpl: _.template(__inline("../../tpl/share.tpl.html")),

        events: {

        },

        initialize: function () {
            this.render();
        },

        render: function () {
            var me = this;

            me.$el.html($(me.tpl({})))
        }

    });
})($);