export class BaseComponent {
    constructor({ element }) {
        this._element = element;

    }

    show() {
        this._element.hidden = false;
    }

    hide() {
        this._element.hidden = true;
    }

    on(eventName, selector, handler) {
        this._element.addEventListener(eventName, (e) => {
            const el = e.target.closest(selector);
            if (!el) {
                return;
            }
            e.delegateTarget = el;
            handler(e);

        })
    }

    onEvent(eventName, cb) {
        this._element.addEventListener(eventName, cb)
    }

    emitEvent(eventName, details) {
        const event = new CustomEvent(eventName, { detail: details });
        this._element.dispatchEvent(event);
    }

}