(function($){

    bonjuice.view.page_checkout = Backbone.View.extend({

        el: "#checkout_page_view",

        initialize : function() {
            this.render();
        },

        render: function() {
            var t = new bonjuice.view.widget_topbar();
            this.$(".top").append(t.$el);
        }

    });

})($);