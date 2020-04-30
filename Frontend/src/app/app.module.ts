import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QueryParamsHandling } from '@angular/router/src/config';
import {ToastModule} from 'primeng/toast';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { ReactiveFormsModule }         from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import {PanelModule} from 'primeng/panel';

import {ButtonModule} from 'primeng/button';

import {InputTextModule} from 'primeng/inputtext';

import {InputTextareaModule} from 'primeng/inputtextarea';

import {FocusTrapModule} from 'primeng/focustrap';

import { HttpClientModule } from '@angular/common/http';

import { RestService} from './rest.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule ,
    MessageModule,
    MessagesModule,
    // DropdownModule,
    PanelModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    FocusTrapModule
    
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
