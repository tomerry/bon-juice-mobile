(function ($) {

    bonjuice.view.widget_topbar_reget = Backbone.View.extend({

        el: $(".topbar-reget")

        , initialize: function () {
            this.bind();
        }

        , bind: function () {
            $(document).on("topbar:regetclick", $.proxy(this.onshow, this));
        }

        , onshow: function () {
            this.show();
        }
    });

})($);