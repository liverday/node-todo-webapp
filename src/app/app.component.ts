import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { ErrorService } from './services/error.service';
import { NgZone, Renderer, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('spinnerElement')
  spinnerElement: ElementRef;
  loading = true;
  error;
  constructor(
    private router: Router,
    private ngZone: NgZone,
    private renderer: Renderer
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
    });
    moment.locale('pt-br');
    setTheme('bs4');
    ErrorService.instance.observable.subscribe(next => this.error = next);
  }

  private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
      this.ngZone.runOutsideAngular(() => {
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          'display',
          'block'
        )
      });
    }
    if (event instanceof NavigationCancel) {
      this.loading = false;
      this._hideSpinner();
    }
    if (event instanceof NavigationError) {
      this.loading = false;
      this._hideSpinner();
    }

    if (event instanceof NavigationEnd) {
      this.loading = false;
      this._hideSpinner();
    }

  }

  private _hideSpinner(): void {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setElementStyle(
        this.spinnerElement.nativeElement,
        'display',
        'none'
      )
    });
  }
}
