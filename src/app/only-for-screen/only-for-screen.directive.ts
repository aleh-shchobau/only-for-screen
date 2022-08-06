import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, takeUntil } from 'rxjs';
import { OnlyForScreenService } from './only-for-screen.service';

@Directive({
  selector: '[onlyForScreen]'
})
export class OnlyForScreenDirective implements OnInit, OnDestroy {

  @Input() onlyForScreen = '';

  private destroy$: ReplaySubject<void> = new ReplaySubject();

  constructor(
    private onlyForScreenService: OnlyForScreenService,
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
    this.setVisibility(this.onlyForScreen === this.onlyForScreenService.initialScreenType);
    this.onlyForScreenService.screenType$.pipe(
      takeUntil(this.destroy$),
    ).subscribe(size => {
      this.setVisibility(this.onlyForScreen === size);
    });
  }

  setVisibility(isVisible: boolean): void {
    this.el.nativeElement.style.display = isVisible ? '' : 'none';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
