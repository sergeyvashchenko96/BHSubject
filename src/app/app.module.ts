import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CloseComponent} from './pages/close/close.component';
import {ClickerComponent} from "./pages/clicker/clicker.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CloseInterceptor} from "./@core/_helpers/close.interceptor";

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: CloseInterceptor,
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    ClickerComponent,
    CloseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
