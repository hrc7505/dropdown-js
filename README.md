# dropdown-js
_This is pure javascript dropdown class plugin. This plugin is completely dynamic._

## How this plugin works?
_On click of the selector the plugin will open the callout down to the selector. 
The callout will not be added after selector instead the plugin creates a portal and inside that portal calout will be added as modal._

## How to use this plugin?
_There are two ways to import this plugin_

  _1. Using a CDN link - You can direclty use the CDN link within `script` tag._
  
    <script src="https://cdn.jsdelivr.net/gh/hrc7505/dropdown-js/dropdown.js"></script>
       
  
 _2. Download this github project and use the `dropdown.js` file direclty in the html file within `script` tag._
  
    <script src="dropdown.js"></script>
        
        
_After importing the plugin script you just need to create an object of the `Dropdown` class and pass in the parameters._
  ```
  <script>
        new Dropdown(
            document.getElementById("selector"),
            [
                { text: "India", key: "in" },
                { text: "Nepal", key: "np" },
                { text: "Bhutan", key: "bh" },
                { text: "Srilanka", key: "sl" },
            ],
        );
  </script>
  ```
  
  **Parameters**

| name | type | description | In use? |
| ---- | ---- | ----------- | ------- |
| `selector` | `HTMLElement` | The DOM element used to open/close the dropdown callout. The default placeholder and the selected text of the option will be placed inside this element. | ✅ |
| `options` | `{key: string; text:string; isSelected?: boolean;}[]` | An array of the options to be render inside the callback. | ✅ |
| `onRenderOption` | `(option:{key: string; text:string; isSelected: boolean}) => string` &#124; `HTMLElement` | The custom option design to render in place of the default one. | ❌ |

  **Methods of the plugin**

| name | type | description | In use? |
| ---- | ---- | ----------- | ------- |
| `toggleDropdown` | `() => void` | Open/close the callout. | ✅ |
| `selectValue` | `(option: {key: string; text:string; isSelected?: boolean}) => void` | Fires on click of the option and selects the option.  | ✅ |
| `injectDefaultCSS` | `() => void` | Injects default callout css. | ✅ |
 
