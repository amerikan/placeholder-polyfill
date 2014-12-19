placeholder-polyfill
====================

A small jQuery plugin to show placeholders on HTML `<input>`'s and `<textarea>`'s in browsers that don't support the `placeholder` attribute natively.

Requirements
====
Requires jQuery 1.0

Usage
====
First include the placeholder-polyfill plugin after your jQuery:

```html
<script type="text/javascript" src="/path/to/jquery.js"></script>
<script type="text/javascript" src="/path/to/jquery.placeholder-polyfill.js"></script>
```

Then initialize:

```html
<script type="text/javascript">
    $(function () {
        $('input, textarea').placeholder();
    });
</script>
```

That  will look for any `<input>` and `<textarea>` in your page and add the plugin functionality if the browser doesn't support the placeholder attribute natively already. See [Can I Use](http://caniuse.com/#feat=input-placeholder) to see what browsers support placeholder natively.

You can also pass options:
```html
<script type="text/javascript">
    $(function () {
        $('input, textarea').placeholder({customClassName: 'my-placeholder'});
    });
</script>
```

### Options Available
`customClassName`: class name of wrapper. `default value: placeholder`

License
====
MIT
