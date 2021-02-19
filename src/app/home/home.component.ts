import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
}
