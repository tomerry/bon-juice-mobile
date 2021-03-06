(function ($) {
    bonjuice.view.widget_calendar = bonjuice.view.extend({

        className: "widget-calendar"

        , events: {
            "click .day": "ondayclick"
        }

        , tpl: __inline("../tpl/calendar.tpl.html")

        , init: function () {

            this.render();

        }

        , ondayclick: function (e) {
            var me = this
                , $el = $(e.currentTarget);

            if (!$el.hasClass("notday") && !$el.hasClass("adjacent-month")) {
                this.$(".checkedday").removeClass("checkedday");
                this.$(".today").removeClass("today");
                $el.addClass("checkedday");
            }

        }

        , render: function () {
            var me = this;

            me.$el.clndr({
                // start the week off on Sunday (0), Monday (1), etc. Sunday is the default.
                weekOffset: 1
                // an array of day abbreviations. If you have moment.js set to a different language,
                // it will guess these for you! If for some reason that doesn't work, use this...
                // the array MUST start with Sunday (use in conjunction with weekOffset to change the starting day to Monday)
                , daysOfTheWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                , template: me.tpl
            });

        }


    });
})($);