/**
 * jquery.placeholder-polyfill
 * 
 * Copyright (c) 2014-2015 Erik Montes
 * Licensed under MIT license
 */

(function ($) {

    /* forceMode forces modern browsers to use this plugin too. However, in such
     * case the attribute 'placeholder-x' must be used instead of 'placeholder'.
     * This is great if you want to keep consistent behaviour or you just want to
     * debug in a modern browser.
     */
    var forceMode = false;

    var isInputSupported = 'placeholder' in document.createElement('input');
    var isTextareaSupported = 'placeholder' in document.createElement('textarea');

    $.fn.placeholder = function (options) {

        // default settings:
        var defaults = {
            customClassName: 'placeholder'
        };

        var settings = $.extend({}, defaults, options);
        var pollyfillableElements = [];
        
        if (isInputSupported && isTextareaSupported && !forceMode) {
            // Browser supports both input and textarea placeholder natively
            return this; 
        }

        if (!isInputSupported || forceMode) {
            // Browser doesn't natively support <input> placeholders
            pollyfillableElements.push('input');
        }

        if (!isTextareaSupported || forceMode) {
            // Browser doesn't natively support <textarea> placeholders
            pollyfillableElements.push('textarea');
        }

        return this.filter(pollyfillableElements.join(',')).each(function() {
            
            var $inputField = $(this);
            var placeholderText = forceMode ? $inputField.attr('placeholder-x') : $inputField.attr('placeholder');

            // Check only for fields that actually have placeholders set
            if (placeholderText) {
                // Generate some necessary elements
                var $label = $('<label />').text(placeholderText).css({'position':'absolute', 'color':'#aaa', 'font-family':'sans-serif'});
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