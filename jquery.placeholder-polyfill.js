/**
 * jquery.placeholder-polyfill
 * 
 * Copyright (c) 2014 Erik Montes
 * Licensed under MIT license
 */

(function ($) {

    var isInputSupported = 'placeholder' in document.createElement('input');
    var isTextareaSupported = 'placeholder' in document.createElement('textarea');

    $.fn.placeholder = function (options) {

        // default settings:
        var defaults = {
            customClassName: 'placeholder'
        };

        var settings = $.extend({}, defaults, options);
        var pollyfillableElements = [];
        
        if (isInputSupported && isTextareaSupported) {
            // Browser supports both input and textarea placeholder natively
            return this; 
        }

        if (!isInputSupported) {
            // Browser doesn't natively support <input> placeholders
            pollyfillableElements.push('input');
        }

        if (!isTextareaSupported) {
            // Browser doesn't natively support <textarea> placeholders
            pollyfillableElements.push('textarea');
        }

        return this.filter(pollyfillableElements.join(',')).each(function() {
            
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