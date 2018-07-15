import { URLSearchParams } from '@angular/http';

export function urlencode (data: Object): string {
    const urlSearchParams = new URLSearchParams();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            urlSearchParams.append(key, data[key]);
        }
    }
    return urlSearchParams.toString();
}
