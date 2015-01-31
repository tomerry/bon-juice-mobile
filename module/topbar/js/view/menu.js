(function ($) {
    bonjuice.view.widget_topbar_menu = Backbone.View.extend({

        tpl: _.template(__inline("../../tpl/menu.tpl.html"))

        , events: {
            "click .topbar-menu-icon": "onmenuclick"
        }

        , initialize: function () {
            this.render();
        }

        , render: function () {
            var me = this;

            me.$el.html($(me.tpl({})))
        }

        , onmenuclick: function () {
            var me=this;

            me.$(".topbar-menu-body").toggle();
        }

    });
})($);