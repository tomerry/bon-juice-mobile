(function ($) {

    bonjuice.view.page_checkout = Backbone.View.extend({

        el: "#checkout_page_view",

        initialize: function () {
            this.render();
        },

        render: function () {
            var t = new bonjuice.view.widget_topbar();
            this.$(".top").append(t.$el);


            $('.ui.dropdown').dropdown();

            $('input').iCheck({
                checkboxClass: 'icheckbox_flat-blue',
                radioClass: 'iradio_flat-blue'
            });

            var calendar = new bonjuice.view.widget_calendar();
            calendar.appendTo(this.$("#calendar"));

        }

    });

})($);