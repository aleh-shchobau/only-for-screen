import { Injectable } from '@angular/core';
import { distinctUntilChanged, fromEvent, map, Observable } from 'rxjs';
import { IConfig } from './config.interface';

@Injectable({
  providedIn: 'root'
})
export class OnlyForScreenService {

  config: IConfig = {
    mobile: 480,
    tablet: 768,
  }
  screenType$: Observable<string>
  initialScreenType = this.getScreenType(window.innerWidth);

  constructor() {
    this.screenType$ = fromEvent(window, 'resize').pipe(
      map(() => this.getScreenType(window.innerWidth)),
      distinctUntilChanged(),
    )
  }

  getScreenType(width: number): string {
    if (width < this.config.mobile) {
      return 'mobile'
    } else
      if (width < this.config.tablet) {
        return 'tablet'
      } else {
        return 'desktop'
      }
  }
}
