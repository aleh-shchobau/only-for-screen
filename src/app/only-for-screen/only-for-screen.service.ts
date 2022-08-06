import { Injectable } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';
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
  initialWidth = this.checkWidth(window.innerWidth);


  constructor() {
    this.screenType$ = fromEvent(window, 'resize').pipe(
      map(() => this.checkWidth(window.innerWidth))
    )
  }

  checkWidth(width: number): string {
    if (width < this.config.mobile) {
      return 'mobile'
    } else
      if (width >= this.config.mobile && width < this.config.tablet) {
        return 'tablet'
      } else {
        return 'desktop'
      }
  }
}
