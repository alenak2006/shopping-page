import { BaseComponent } from '../../shared/components/base.component.js'
import { PhoneService } from '../phones.service.js';

//export const phones = PhoneService.getAll();

export class PhonesCatalogComponent extends BaseComponent {
  constructor({ element }) {
    super({ element });
    this._phones = [];
    this.on('click', '.phone', (e) => {
      this.emitEvent('phone-select', e.delegateTarget.dataset.phoneId);
    })

    this.on('click', '.add-to-cart', (e) => {
      this.emitEvent('add-to-cart', e.delegateTarget.dataset.phoneId);


    })
  }

  show(phones) {
    this._phones = phones;
    this._render();
    super.show();
  }

  _render() {
    this._element.innerHTML = `
        <ul class="phones list-group">
        ${this._phones.map((phone) => `
        <li class="thumbnail list-group-item" data-phone-id ="${phone.id}">
        <a href="#!/phones/${phone.id}" class="thumb">
          <img class = "phone" alt="${phone.name}" src="${phone.imageUrl}" data-phone-id ="${phone.id}">
        </a>

        <div class="phones__btn-buy-wrapper add-to-cart" data-phone-id ="${phone.id}">
          <a class="btn btn-primary">
            Add
          </a>
        </div>

        <a href="#!/phones/${phone.id}">${phone.name}</a>
        <p>${phone.snippet}</p>
      </li> `).join('')}
      </ul>`
  }
}
