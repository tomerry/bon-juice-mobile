(function ($) {
    bonjuice.view.widget_topbar = Backbone.View.extend({

        className: "topbar-wrapper",

        tpl: _.template(__inline("../../tpl/topbar.tpl.html")),

        events: {

        },

        initialize: function () {

            this.render();
        },

        render: function () {
            var me = this;
            me.$el.html($(me.tpl()))

            var menu=new bonjuice.view.widget_topbar_menu();
            me.$(".topbar-menu-wrapper").append(menu.$el);

            var share=new bonjuice.view.widget_topbar_share();
            me.$(".topbar-share-wrapper").append(share.$el);

            var user=new bonjuice.view.widget_topbar_user();
            me.$(".topbar-user-wrapper").append(user.$el);
        }

    });
})($);