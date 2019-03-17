import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    constructor(private router: Router) { }

    /**
     * filter products using product name
     * 
     * 
     * @param items 
     * @param filter 
     * @param defaultFilter 
     */
    transform(items: any, filter: any, defaultFilter: boolean): any {

        // check if user logged in to use this pipe
        const user = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : '';
        
        if (!user.logged && user != null) {
            return this.router.navigate(['login']);
        }

        if (!filter) {
            return items;
        }

        if (!Array.isArray(items)) {
            return items;
        }

        if (filter && Array.isArray(items)) {
            let filterKeys = Object.keys(filter);

            if (defaultFilter) {
                return items.filter(item =>
                    filterKeys.reduce((x, keyName) =>
                        (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "", true));
            }
            else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    }

}
