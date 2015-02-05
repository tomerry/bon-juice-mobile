(function($){

    bonjuice.view.page_order = bonjuice.view.extend({

        el: "#order_page_view",

        init : function() {
            this.render();
        },

        render: function() {
            var t = new bonjuice.view.widget_topbar();
            this.$(".top").append(t.$el);

            $('.ui.dropdown').dropdown();

            $('input').iCheck({
                checkboxClass: 'icheckbox_flat-blue',
                radioClass: 'iradio_flat-blue'
            });
        }

    });

})($);