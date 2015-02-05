(function ($) {
    window.bonjuice = {
        view: {}
        , model: {}
    };

    bonjuice.view = Backbone.View.extend({
        show: function () {
            this.$el.show();
        }
        , hide: function () {
            this.$el.hide();
        }
        , appendTo: function (pView) {
            pView.append(this.$el);
        }
        , append: function (cView) {
            this.$el.append(cView.$el);
        }
        , initialize: function () {
            this.init && this.init.apply(this, arguments);
        }
    });

})($);
