import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ToplistComponent } from './toplist/toplist.component';

const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'toplist', component: ToplistComponent },
    { path: 'home', redirectTo: '' },
    { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
