import { BaseComponent } from '../../shared/components/base.component.js'

export class PhonesDetailsComponent extends BaseComponent {
    constructor({ element, onBack }) {
        super({ element });
        this._onBack = onBack;
        this._element.addEventListener('click', (e) => {
            let backButton = e.target.closest('.back');
            if (!backButton) {
                return;
            }
            this._onBack();
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
        console.log(images);
        this._element.innerHTML = `
        <div>
        <img class="phone">

        <button class = "back" >Back</button>
        <button>Add to basket</button>
        <h1>${name}</h1>
        <p>${description} </p>
        <ul class="phone-thumbs">
        ${images.map((src) =>
            `<li>
                <img src=${src}>
            </li>`
        ).join('')}
        </ul>

        
    </div>`
    }
}
