/*!
 * 
 * jquery.dblClickField v1.0
 * https://github.com/eneskpc/jquery.dblClickField
 * 
 */

(function ($) {
    "use strict";
    $.fn.dblClickField = function () {
        var thisField = $(this);
        thisField.after('<textarea class="dcf-editArea"></textarea>');
        var textFieldNext = thisField.next('textarea.dcf-editArea');
        textFieldNext.css({
            'font-family': thisField.css('font-family'),
            'font-size': thisField.css('font-size'),
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
                thisField.text(textFieldNext.val());
                thisField.show();
                textFieldNext.hide();
            }
        });
    }
})(jQuery);