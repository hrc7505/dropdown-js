class Dropdown {
    /**
     * @param {HTMLElement} selector The DOM element used to open/close the dropdown callout.
     * @param {{key: string; text:string; isSelected: boolean}[]} options An array of options to be render.
     * @param {(option:{key: string; text:string; isSelected: boolean}) => string | HTMLElement} onRenderOption Custom option design to render.
     **/
    constructor(selector, options, onRenderOption) {
        this.selector = selector;
        this.options = options;
        this.onRenderOption = onRenderOption;

        // Assigning click event to selector
        selector.onclick = this.toggleDropdown;

        // Creating portal and appending to body
        this.portal = document.createElement("portal");
        document.body.appendChild(this.portal);

        // Injecting default css
        this.injectDefaultCSS();
    }

    toggleDropdown = () => {
        if (this.portal.innerHTML) {
            this.portal.innerHTML = "";
        } else {
            const rect = selector.getBoundingClientRect();

            /**
             * @type {CSSStyleDeclaration}
             */
            const calloutStyle = {
                left: `${rect.x}px`,
                top: `${rect.top + selector.offsetHeight}px`,
                minWidth: `${this.selector.offsetWidth}px`,
            };

            // Callout creation and styling
            const callout = document.createElement("callout");
            for (const styleKey in calloutStyle) {
                if (calloutStyle.hasOwnProperty(styleKey)) {
                    callout.style[styleKey] = calloutStyle[styleKey];
                }
            }

            // List creation
            const ul = document.createElement("ul");
            ul.classList.add("list-container");
            for (const option of this.options) {
                const li = document.createElement("li");
                li.classList += `list-item ${option.isSelected ? "selected" : ""}`;
                li.innerHTML = option.text;
                li.onclick = option.isSelected ? this.toggleDropdown : () => this.selectValue(option);
                ul.appendChild(li);
            }

            callout.appendChild(ul);
            this.portal.appendChild(callout);
        }
    }

    /**
     * Selects an option.
     * @param {HTMLLIElement} listItem List item to be clicked.
     * @param {{key: string; text:string; isSelected: boolean}} option An option to be selected.
     */
    selectValue = (option) => {
        const prevSelectedOption = this.options.find((optionItem) => optionItem.isSelected === true);
        if (!prevSelectedOption || prevSelectedOption.key !== option.key) {
            if (prevSelectedOption) {
                prevSelectedOption.isSelected = false;
            }

            option.isSelected = true;
            this.selector.innerHTML = option.text;
        }
        this.toggleDropdown();
    }

    injectDefaultCSS = () => {
        const rect = selector.getBoundingClientRect();
        const head = document.head;
        const style = document.createElement("style");
        style.innerHTML = `
            callout{
                display: block;
                position: absolute;
                overflow: auto;
                max-height: calc(100vh - ${rect.top + selector.offsetHeight}px);
                height: 100%;
            }
            .list-container {
                list-style-type: none;
                margin: 0;
                padding: 0;
                border: 1px solid #ccc;
            }
            .list-container .list-item {
                padding: 10px 15px;
                cursor: pointer;
                background: #ccc;
            }
            .list-container .list-item:hover {
                background: #777;
                color: #fff;
            }
            .list-container .list-item.selected{
                background: #fff;
            }
            .list-container .list-item.selected:hover{
                color: #000;
            }
        `;
        head.appendChild(style);
    }
}
