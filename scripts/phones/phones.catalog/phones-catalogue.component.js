import { BaseComponent } from '../../shared/components/base.component.js'

export class PhonesCatalogComponent extends BaseComponent {
  constructor({ element, phones, onPhoneSelect }) {
    super({ element });
    this._phones = phones;
    this._onPhoneSelect = onPhoneSelect;
    this._render();
    this._element.addEventListener('click', (e) => {
      let phoneElement = e.target.closest('.phone');
      if (!phoneElement) {
        return;
      }
      this._onPhoneSelect(phoneElement.dataset.phoneId);
    })
  }

  show(phones) {
    this._phones = phones;
    this._render();
    super.show();
  }
  _render() {
    this._element.innerHTML = `
        <ul class="phones">
        ${this._phones.map((phone) => `
        <li class="thumbnail phone" data-phone-id ="${phone.id}">
        <a href="#!/phones/${phone.id}" class="thumb">
          <img alt="${phone.name}" src="${phone.imageUrl}">
        </a>

        <div class="phones__btn-buy-wrapper">
          <a class="btn btn-success">
            Add
          </a>
        </div>

        <a href="#!/phones/${phone.id}">${phone.name}</a>
        <p>${phone.snippet}</p>
      </li> `).join('')}
      </ul>`
  }
}
