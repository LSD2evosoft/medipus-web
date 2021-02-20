import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
    selector: 'app-achievements',
    templateUrl: './achievements.component.html',
    styleUrls: ['./achievements.component.scss']
})
export class AchievementComponent implements OnInit {

    constructor(public datastore: DatastoreService) { }
    
    ngOnInit(): void {
    }
}