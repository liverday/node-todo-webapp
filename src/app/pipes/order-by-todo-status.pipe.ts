import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderByStatus'
})
export class OrderByStatusPipe implements PipeTransform {

    transform(items: any[], completed?: boolean): any {
        items.sort((a: any, b: any) => {
            if (a.completed < b.completed) {
                return -1;
            } else if (a.completed > b.completed) {
                return 1;
            } else {
                return 0;
            }
        });
        return items;
    }

}
