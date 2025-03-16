import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSort',
  pure: false, // Set to false if you want automatic updates when the array changes
})
export class SortPipe implements PipeTransform {
  transform<T>(
    items: T[],
    property: keyof T,
    order: 'asc' | 'desc' = 'asc'
  ): T[] {
    if (!items || !property) return items;

    return [...items].sort((a, b) => {
      const valueA = a[property];
      const valueB = b[property];

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return order === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return order === 'asc' ? +valueA - +valueB : +valueB - +valueA;
      }
    });
  }
}
