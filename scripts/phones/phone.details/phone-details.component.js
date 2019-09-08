import { BaseComponent } from '../../shared/components/base.component.js'

export class PhonesDetailsComponent extends BaseComponent {
    constructor({ element }) {
        super({ element });
        this.on('click', '.thumb', (e) => {
            this._currentImage.src = e.delegateTarget.src;
        })

        this.on('click', '.back', () => {
            this.emitEvent('back');

        })

        this.on('click', '.add', () => {
            this.emitEvent('add-to-cart', this._phone.id);
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
