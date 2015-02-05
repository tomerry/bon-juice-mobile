(function ($) {

    bonjuice.view.page_order_p2 = bonjuice.view.extend({

        el: "#p2"

        , events: {
            "click .checkout .button": "oncheckoutclick"
        }

        , oncheckoutclick: function () {
            alert(1)
        }


    });

})($);