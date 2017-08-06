import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderByPipe implements PipeTransform {
  transform(peoples: any, order: any): any {
    if (order !== undefined) {
      if (order === 'asc') {
        return peoples.sort(
        (a: any, b: any) => {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        });
      }else if (order === 'desc') {
        return peoples.sort(
        (a: any, b: any) => {
          if (a.name > b.name) {
            return -1;
          } else if (a.name < b.name) {
            return 1;
          } else {
            return 0;
          }
        });
      }else if (order === 'birth_year') {
        return peoples.sort(
        (a: any, b: any) => {
          if (a.birth_year < b.birth_year) {
            return -1;
          } else if (a.birth_year > b.birth_year) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    }
    return peoples;
  }
}
