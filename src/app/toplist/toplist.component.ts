import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { User } from '../model/user';

@Component({
    selector: 'app-toplist',
    templateUrl: './toplist.component.html',
    styleUrls: ['./toplist.component.scss']
})
export class ToplistComponent implements OnInit {

    isGlobal: boolean;
    topList: [User, number][];

    constructor(public datastore: DatastoreService) { 
    }

    ngOnInit(): void {
        this.getToplist(true);
    }

    getToplist(global: boolean): void {
        this.topList = [];
        this.isGlobal = global;

        let topUsers: User[] = [];
        if(global) {
            topUsers = this.datastore.users;
        }
        else {
            for (let friendId of this.datastore.user.friendIDs) {
                for (let user of this.datastore.users) {
                    if(friendId == user.id){
                        topUsers.push(user);
                    }
                }
            }

            topUsers.push(this.datastore.user);
        }

        let sortedUsers = topUsers.sort((a,b) => b.healthScore - a.healthScore);
        let position = sortedUsers.indexOf(this.datastore.user) + 1;
        let topList = sortedUsers.slice(0, 100);

        topList.map((item) => this.topList.push([item, this.topList.length + 1]));
        if(!topList.some((item) => item.id == this.datastore.user.id)) {
            this.topList.push([this.datastore.user, position]);
        }
    }
}
