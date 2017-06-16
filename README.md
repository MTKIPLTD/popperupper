# popperupper

This is a small project to add a button to any page that launches an app in a modal iframe.

## Development
Run `npm install` and `npm run build` before using the code from source.

## Usage
```html
<html>
  <body>
    <h1>Example page</h1>
    <p>Some content appearing before the button</p>
    <script async src="./popperupper.js" data-url="http://url-of.app/?andany=parameters"></script>
    <p>Some content appearing after the button</p>
  </body>
</html>
```

### Options
Options can be specified as data attributes on the script element.

| Attribute | Description | Default |
| --- | --- | --- |
| data-url | URL of the app to load in the iframe | '' |
| data-label | Label of the button | 'Launch external application' |
| data-class | Space separated classes to be applied to the button | '' |

## Controlling the modal with the app

From the application mounted within the modal, the modal itself can be resized or closed. To do this and remain
cross-origin safe, it uses [iframe-resizer](https://github.com/davidjbradshaw/iframe-resizer). Once you have this
dependency installed, instatiate it using the code below (some linting rules may need to be disabled).

```javascript
import { iframeResizerContentWindow } from 'iframe-resizer';

// This needs to be referenced so it isn't tree-shaken.
iframeResizerContentWindow;
```

The resize logic will look for an element with the tag `[data-iframe-height]` and use its height to resize the modal window.

You can close the modal window from the application by dispatching the following message

```javascript
window.parentIFrame.sendMessage('POPPERUPPER_CLOSE');
```

In TypeScript you may need to replace `window` with `(<any>window)` for it to allow `parentIFrame`.
