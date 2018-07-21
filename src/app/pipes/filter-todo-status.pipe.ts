import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodoStatus'
})
export class FilterTodoStatusPipe implements PipeTransform {

  transform(items: any[], completed?: boolean): any {
    if (typeof completed == 'boolean') {
      return items.filter(item => item.completed == completed);
    }
    else return items;
  }

}
