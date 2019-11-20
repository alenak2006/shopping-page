import { BaseComponent } from '../../shared/components/base.component.js'

export class FilterComponent extends BaseComponent {
    constructor({ element }) {
        super({ element });
        this._render();
        this.on('input', '.search', ({ delegateTarget: { value } }) => {
            this.emitEvent('search', value);
        })
        this.on('change', '.sort', ({ delegateTarget: { value } }) => {
            this.emitEvent('change-order', value);
        })
    }

    _render() {
        this._element.innerHTML = `
<div class= "row">
<div class="col-md-2">
</div>
<div class="col-md-3">
    <select class="form-control sort" placeholder="Sort By..">
    <option selected>Sort By...</option>   
    <option value="name">Alphabetical</option>
    <option value="age">Newest</option>
  </select>
</div>
<div class="col-md-1">
</div>
<div class="input-group col-md-3">
    <input type="text" class="form-control search" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
</div>
</div>`
    }

}