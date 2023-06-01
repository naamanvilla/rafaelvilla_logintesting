import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { APIdataComponent } from './apidata/apidata.component';
import { CRUDComponent } from './crud/crud.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FileReaderComponent,
    WelcomeComponent,
    APIdataComponent,
    CRUDComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
