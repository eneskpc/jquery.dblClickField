/*!
 * jquery.dblClickField v1.0.1
 * https://github.com/eneskpc/jquery.dblClickField
 */
(function ($) {
    "use strict";
    $.fn.dblClickField = function (param) {
        var thisField = $(this);
        thisField.after('<textarea class="dcf-editArea"></textarea>');
        var textFieldNext = thisField.next('textarea.dcf-editArea');
        textFieldNext.css({
            'font-family': thisField.css('font-family'),
            'font-size': thisField.css('font-size'),
            'text-align': thisField.css('text-align'),
            'font-weight': 700
        });
        autosize(textFieldNext);
        thisField.dblclick(function () {
            textFieldNext.show();
            textFieldNext.focus();
            textFieldNext.val(thisField.text());
            thisField.hide();
        });
        textFieldNext.keypress(function (event) {
            if (event.which == 13) {
                event.preventDefault();
                if (!$.isEmptyObject(param) && !$.isEmptyObject(param.send)) {
                    var name = (!$.isEmptyObject(thisField.attr('sname')) ? thisField.attr('sname') : 'dcf1');
                    $.ajax({
                        url: param.send.url,
                        method: param.send.method,
                        data: textFieldNext.attr('name', name).serializeArray()
                    }).done(function (response) {
                        var r = $.parseJSON(response);
                        if (r.success) {
                            thisField.text(textFieldNext.val());
                            thisField.show();
                            textFieldNext.hide();
                        } else {
                            alert("Update Successful!");
                        }
                    });
                } else {
                    thisField.text(textFieldNext.val());
                    thisField.show();
                    textFieldNext.hide();
                }
            }
        });
    }
})(jQuery);