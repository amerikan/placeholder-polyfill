/**
 * jquery.placeholder-polyfill
 * 
 * Copyright (c) 2014 Erik Montes
 * Licensed under MIT license
 */

(function ($) {

    $.fn.placeholder = function (options) {

         // default settings:
        var defaults = {
            customClassName: 'placeholder'
        };

        var settings = $.extend({}, defaults, options);

        return this.each(function() {
            
            var $inputField = $(this);
            var placeholderText = $inputField.attr('placeholder');
            var $label = $('<label />').text(placeholderText).css({'position':'absolute', 'color':'#aaa', 'font-family':'sans-serif'});
            var $wrapper = $('<div />').addClass(settings.customClassName).css({'display':'inline-block', 'position':'relative'});
            
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