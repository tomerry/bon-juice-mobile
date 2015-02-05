(function ($) {

    bonjuice.view.page_order_p1 = bonjuice.view.extend({

        el: "#p1"

        , events: {
            "click .checkout .button": "oncheckoutclick"
        }

        , oncheckoutclick: function () {
            alert(1)
        }


    });

})($);