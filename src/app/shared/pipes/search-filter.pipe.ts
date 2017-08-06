import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(peoples: any, search: any): any {
    if (search === undefined || search === '') {
      return peoples;
    }else {
      const filter = search;
      return peoples.filter(people => people.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }

  }
}
