/*!
 * jquery.dblClickField v1.0.1
 * https://github.com/eneskpc/jquery.dblClickField
 */
(function ($) {
    "use strict";
    $.fn.extend({
        dblClickField: function (param) {
            return this.each(function () {
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
                    if (!$.isEmptyObject(param) && typeof param.onEditMode === "function") {
                        param.onEditMode(thisField);
                    }
                });
                textFieldNext.keypress(function (event) {
                    if (event.which == 13) {
                        event.preventDefault();
                        if (!$.isEmptyObject(param) && !$.isEmptyObject(param.send)) {
                            var name = (!$.isEmptyObject(thisField.attr('sname')) ? thisField.attr('sname') : 'dcf1');
                            var sendMethod = !$.isEmptyObject(param.send.method) ? param.send.method : "GET";
                            $.ajax({
                                url: param.send.url,
                                method: sendMethod,
                                data: textFieldNext.attr('name', name).serializeArray()
                            }).done(function (response) {
                                var r = $.parseJSON(response);
                                if (r.success) {
                                    thisField.text(textFieldNext.val());
                                    thisField.show();
                                    textFieldNext.hide();
                                } else {
                                    alert(r.errorMessage);
                                }
                            });
                        } else {
                            thisField.text(textFieldNext.val());
                            thisField.show();
                            textFieldNext.hide();
                        }
                        if (!$.isEmptyObject(param) && typeof param.onChanged === "function") {
                            param.onChanged(thisField);
                        }
                    }
                });
            });
        },

    });
})(jQuery);