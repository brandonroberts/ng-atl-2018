import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { GoogleBooksService } from './google-books.service';


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
