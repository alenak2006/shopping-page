import { BaseComponent } from '../../shared/components/base.component.js'

export class CartComponent extends BaseComponent {
    constructor({ element }) {
        super({ element });
        this._phones = {};
        this._render();
        this._element.addEventListener('click', (e) => {
            const removeButton = e.target.closest('.remove');
            if (!removeButton) {
                return;
            }

            const { phoneId } = removeButton.dataset;
            this._phones[phoneId] -= 1;
            if (this._phones[phoneId] === 0) {
                delete this._phones[phoneId];
            }

            this._render();
        })

    }
    add(phoneId) {
        if (!this._phones[phoneId]) {
            this._phones[phoneId] = 0;
        }
        this._phones[phoneId] += 1;
        this._render();
    }

    _render() {
        this._element.innerHTML = `
        <h4>Shopping Cart</h4>
        <ul class="list-group">
        ${Object.entries(this._phones).map(([phoneId, count]) => {
            return `<li class="list-group-item">${phoneId}<span class="badge badge-primary badge-pill">${count}</span></li>
            <button class= "remove btn btn-secondary" data-phone-id = ${phoneId}>X</button>`
        }).join('')}
        </ul>
`
    }
}
