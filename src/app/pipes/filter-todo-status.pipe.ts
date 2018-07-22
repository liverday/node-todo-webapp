import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodoStatus'
})
export class FilterTodoStatusPipe implements PipeTransform {

  transform(items: any[], completed?: boolean): any {
    if (typeof completed == 'boolean') {
      const response = items.filter(item => item.completed == completed);
      if (response.length > 0) {
        return response;
      } else return [-1];
    }
    else return items;
  }

}
