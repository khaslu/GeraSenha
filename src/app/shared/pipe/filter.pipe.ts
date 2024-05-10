import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: string[], filter: string, field?: string): unknown {
    return values?.map(m => field ? m[field] : m).filter(v => v.toLowerCase().includes(filter.toLowerCase()));
  }

}
