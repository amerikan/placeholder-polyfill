placeholder-polyfill
====================

A small jQuery plugin to show placeholders on HTML `<input>`'s and `<textarea>`'s in browsers that don't support the `placeholder` attribute natively.

## Demo
[Live Demo](http://amerikan.github.io/placeholder-polyfill)

## Requirements

Requires jQuery 1.0+

## Usage

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

```html
<input type="text" placeholder="Enter Username" />
<input type="password" placeholder="Enter Password" />
<textarea placeholder="Enter details"></textarea>
```

The plugin will then look for any `<input>` and `<textarea>` in your page that has the `placeholder` attribute set and add the placeholder functionality if the browser doesn't support it already natively already. See [Can I Use](http://caniuse.com/#feat=input-placeholder) to see what browsers support placeholder natively.

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

## Bugs

The development of this plugin just started so it's fairly new. I welcome Pull Requests and bug reports.

Before opening an issue, please check if a similar issue is not already opened. When opening an issue please include:

- browser(s) affected
- test case for me to test
- jQuery version


## License

MIT
