import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
    selector: 'app-profile',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

    constructor(public datastore: DatastoreService) { }

    ngOnInit(): void {
    }

}
