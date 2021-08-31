import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AppSelectComponent } from './app-select/app-select.component';
import { TopBarComponentComponent } from './top-bar-component/top-bar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AppSelectComponent,
    TopBarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
