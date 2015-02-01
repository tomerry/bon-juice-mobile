(function ($) {
    window.bonjuice = {
        view: {}
        , model: {}
    };

    //jQuery = Zepto;

    Backbone.View.prototype.show = function () {
        this.$el.show();
    }
    Backbone.View.prototype.hide = function () {
        this.$el.hide();
    }
})($);

