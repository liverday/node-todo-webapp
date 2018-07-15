import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { ErrorService } from './services/error.service'; 
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  error;
  constructor() {
    moment.locale('pt-br');
    setTheme('bs4');
    ErrorService.instance.observable.subscribe(next => this.error = next);
  }
}
