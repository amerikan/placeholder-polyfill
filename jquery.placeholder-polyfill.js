(function ($) {

    $.fn.placeholder = function (options) {

         // default settings:
        var defaults = {
            customClassName: 'placeholder'
        };

        var settings = $.extend({}, defaults, options);

        return this.each(function() {
            
            var $inputField = $(this);
            var $label = $('<label />').text(placeholderText).css({'position':'absolute', 'color':'#aaa', 'font-family':'sans-serif'});
            var $wrapper = $('<div />').addClass(settings.customClassName).css({'display':'inline-block', 'position':'relative'});
            var placeholderText = $inputField.attr('data-placeholder');

            $inputField.wrap($wrapper);
            $inputField.before($label);

            $label.bind('click', function () {
                $inputField.focus();
            });

            $inputField.bind('keyup', checkInput);

            function checkInput() {
                if ($inputField.val() === '') {
                    $label.show();
                } else {
                    $label.hide();
                }
            }

            checkInput();
        });

    };
}(jQuery));