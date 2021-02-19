import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(public datastore: DatastoreService) { }

    ngOnInit(): void {
    }

}
