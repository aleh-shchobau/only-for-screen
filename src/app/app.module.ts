import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OnlyForScreenModule } from './only-for-screen/only-for-screen.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OnlyForScreenModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
