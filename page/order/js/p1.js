(function ($) {

    bonjuice.view.page_order_p1 = Backbone.View.extend({

        el: "#p1"

        , events: {
            "click .checkout .button": "oncheckoutclick"
        }

        , oncheckoutclick: function () {
            alert(1)
        }


    });

})($);