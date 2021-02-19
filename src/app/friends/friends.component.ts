import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { User } from '../model/user';

@Component({
    selector: 'app-profile',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

    user: User;
    friends: User[];
    newFriendUserName: string = '';

    constructor(public datastore: DatastoreService) { }

    ngOnInit(): void {
        this.user = this.datastore.user;
        this.friends = this.getFriends();
    }

    addFriend(): void {
        let friend = this.friends.filter((item) => item.userName == this.newFriendUserName || item.email == this.newFriendUserName)[0];

        if(friend == undefined) {
            friend = this.datastore.users.filter((item) => item.userName == this.newFriendUserName || item.email == this.newFriendUserName)[0];
            if(friend != undefined && confirm('Are you sure you want to add ' + friend.name + ' to your friends?')) {
                this.user.friendIDs.push(friend.id);
                this.friends = this.getFriends();
            }
        }
    }

    getFriends(): User[] {
        let friends: User[] = [];
        for (let friendId of this.user.friendIDs) {
            for (let user of this.datastore.users) {
                if(friendId == user.id) {
                    friends.push(user);
                }
            }
        }

        return friends.sort((a,b) => a.name.localeCompare(b.name));
    }
    
    removeFriend(id: string): void {
        let friend = this.friends.filter((item) => item.id == id)[0];
        if(friend != undefined && confirm('Are you sure you want to remove ' + friend.name + ' from your friends?')) {
            this.user.friendIDs = this.user.friendIDs.filter((item) => item !== id);
            this.friends = this.getFriends();
        }
    }

}
