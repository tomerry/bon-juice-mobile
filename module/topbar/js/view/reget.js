(function ($) {

    bonjuice.view.widget_topbar_reget = bonjuice.view.extend({

        el: $(".topbar-reget")

        , init: function () {
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