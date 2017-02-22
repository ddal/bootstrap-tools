(function ($) {

    var template = "<div class='alert' />";
    //var template = "<div class='alert' style='display: inline-block;' />";
    var types = {
        success: {
            timeout: 1000,
            class: "alert-success"
        },
        info: {
            timeout: 5000,
            class: "alert-info"
        },
        warning: {
            timeout: 5000,
            class: "alert-warning"
        },
        danger: {
            timeout: 5000,
            class: "alert-danger"
        }
    };

    $.fn.alert = function (msg, typeCode, options) {

        var type = types[typeCode] || types.info;
        var opts = $.extend({ ms: type.timeout }, options);
        var $alert = $(template).addClass(type.class).html(msg);
        var $target = this.find("[role='alert']");
        $target.find(".alert").remove();

        $alert.appendTo($target);

        if (opts.ms != "infinite") {
            setTimeout(function () { $alert.remove(); opts.callback && opts.callback(); }, opts.ms);
        }

        return $alert;
    }

}(jQuery));