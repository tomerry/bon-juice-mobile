__inline("./legacy.js");
(function ($) {
    window.bonjuice = {
        view: {}
        , model: {}
    };

    Zepto = jQuery;

    Backbone.View.prototype.show = function () {
        this.$el.show();
    }
    Backbone.View.prototype.hide = function () {
        this.$el.hide();
    }

    Backbone.View.prototype.appendTo = function (pView) {
        pView.append(this.$el);
    }

    Backbone.View.prototype.append = function (cView) {
        this.$el.append(cView.$el);
    }

})($);

