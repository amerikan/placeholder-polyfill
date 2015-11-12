/**
 * jquery.placeholder-polyfill
 * 
 * Copyright (c) 2014-2015 Erik Montes
 * Licensed under MIT license
 */

(function ($) {

    var isInputSupported = 'placeholder' in document.createElement('input');
    var isTextareaSupported = 'placeholder' in document.createElement('textarea');

    $.fn.placeholder = function (options) {

        // default settings:
        var defaults = {
            customClassName: 'placeholder',
            /* forceMode forces modern browsers to use this plugin too. However, in such
             * case the attribute 'placeholder-x' must be used instead of 'placeholder'.
             * This is great if you want to keep consistent behaviour or you just want to
             * debug in a modern browser.
             */
            forceMode: false
        };

        var settings = $.extend({}, defaults, options);
        var pollyfillableElements = [];
        
        if (isInputSupported && isTextareaSupported && !settings.forceMode) {
            // Browser supports both input and textarea placeholder natively
            return this; 
        }

        if (!isInputSupported || settings.forceMode) {
            // Browser doesn't natively support <input> placeholders
            pollyfillableElements.push('input');
        }

        if (!isTextareaSupported || settings.forceMode) {
            // Browser doesn't natively support <textarea> placeholders
            pollyfillableElements.push('textarea');
        }

        return this.filter(pollyfillableElements.join(',')).each(function() {
            
            var $inputField = $(this);
            var inputFontSizeStyle = $inputField.css('font-size');
            var placeholderText = settings.forceMode ? $inputField.attr('placeholder-x') : $inputField.attr('placeholder');

            // Check only for fields that actually have placeholders set
            if (placeholderText) {
                // Generate some necessary elements
                var $label = $('<label />').text(placeholderText)
                                           .css({'position':'absolute', 'color':'#aaa', 'font-size': inputFontSizeStyle, 'font-family':'sans-serif'});
                var $wrapper = $('<div />').addClass(settings.customClassName).css({'display':'inline-block', 'position':'relative'});
                
                $inputField.wrap($wrapper);
                $inputField.before($label);

                $label.bind('click', function () {
                    $inputField.focus();
                });

                $inputField.bind('keyup', checkInput);

                checkInput();
            }

            function checkInput() {
                if ($inputField.val() === '') {
                    $label.show();
                } else {
                    $label.hide();
                }
            }
        });

    };
}(jQuery));