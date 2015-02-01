(function ($) {

    bonjuice.view.page_order_p3 = Backbone.View.extend({

        el: "#p3"

        , events: {
            "click .checkout .button": "oncheckoutclick"
        }

        , oncheckoutclick: function () {

            // todo
            window.location.href="checkout.html";
        }


    });

})($);