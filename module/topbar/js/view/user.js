(function ($) {
    bonjuice.view.widget_topbar_user = Backbone.View.extend({

        tpl: _.template(__inline("../../tpl/user.tpl.html")),

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