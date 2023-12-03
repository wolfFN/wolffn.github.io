---
title: DOM
---

## document.readyState

改变时，会触发 `readystatechange` 事件。有三个值：

-   `loading`,
-   `interactive`, 等价于 `DOMContentLoaded` 事件:
    ```js
    document.addEventListener('DOMContentLoaded', event => {
        console.log('DOM fully loaded and parsed');
    });
    ```
-   `complete`, 等价于 `load` 事件:
    ```js
    window.addEventListener('load', event => {
        console.log('page is fully loaded');
    });
    ```

```js
switch (document.readyState) {
    case 'loading':
        // The document is loading.
        break;
    case 'interactive': {
        // The document has finished loading and we can access DOM elements.
        // Sub-resources such as scripts, images, stylesheets and frames are still loading.
        const span = document.createElement('span');
        span.textContent = 'A <span> element.';
        document.body.appendChild(span);
        break;
    }
    case 'complete':
        // The page is fully loaded.
        console.log(
            `The first CSS rule is: ${document.styleSheets[0].cssRules[0].cssText}`,
        );
        break;
}
```
