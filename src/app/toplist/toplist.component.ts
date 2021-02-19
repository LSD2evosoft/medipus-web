import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
    selector: 'app-toplist',
    templateUrl: './toplist.component.html',
    styleUrls: ['./toplist.component.scss']
})
export class ToplistComponent implements OnInit {

    constructor(public datastore: DatastoreService) { }

    ngOnInit(): void {
    }
}
