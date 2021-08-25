import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Product[], filterText?: string): Product[] {
    if (!filterText) {
      return value;
    }
    const text = filterText;

    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (p: Product) => p.ProductName.toLocaleLowerCase().indexOf(text) !== -1
        )
      : value;
  }
}
