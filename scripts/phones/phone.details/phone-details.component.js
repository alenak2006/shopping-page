import { BaseComponent } from '../../shared/components/base.component.js'

export class PhonesDetailsComponent extends BaseComponent {
    constructor({ element, onBack, onAdd }) {
        super({ element });
        this._onBack = onBack;
        this._onAdd = onAdd;
        this._element.addEventListener('click', (e) => {
            let backButton = e.target.closest('.back');
            let thumb = e.target.closest('.thumb');
            let addButton = e.target.closest('.add');
            if (thumb) {
                this._currentImage.src = thumb.src;
                return;
            }
            if (backButton) {
                this._onBack();
                return;
            }
            if (addButton) {
                this._onAdd(this._phone.id);

            }

        })

    }

    show(phone) {
        this._phone = phone;
        this._render();
        this._currentImage = this._element.querySelector('.phone');
        [this._currentImage.src] = this._phone.images;
        super.show();

    }
    _render() {
        const { name, description, images } = this._phone;
        this._element.innerHTML = `
        <div>
        <img class="phone">
        <button class = "back" >Back</button>
        <button class = "add">Add to basket</button>
        <h1>${name}</h1>
        <p>${description} </p>
        <ul class="phone-thumbs">
        ${images.map((src) =>
            `<li>
                <img src=${src} class = "thumb">
            </li>`
        ).join('')}
        </ul>

        
    </div>`
    }
}
