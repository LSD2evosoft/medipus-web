import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ToplistComponent } from './toplist/toplist.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        ToplistComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        // ngx-bootstrap https://valor-software.com/ngx-bootstrap/#/documentation#getting-started
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
