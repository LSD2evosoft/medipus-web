import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ToplistComponent } from './toplist/toplist.component';
import { AchievementComponent } from './achievements/achievements.component';
import { BasicInfoComponent } from './basicinfo/basicinfo.component';
import { FriendsComponent } from './friends/friends.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ScreeningsComponent } from './screenings/screenings.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        ToplistComponent,
        AchievementComponent,
        FriendsComponent,
        BasicInfoComponent,
        ScreeningsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,

        // ngx-bootstrap https://valor-software.com/ngx-bootstrap/#/documentation#getting-started
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TooltipModule.forRoot(),
        TypeaheadModule.forRoot(),
        ModalModule.forRoot(),
        ProgressbarModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
