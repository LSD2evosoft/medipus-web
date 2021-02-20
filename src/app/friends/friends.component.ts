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

    getFriends(): User[] {
        let friends: User[] = [];
        for (let friendId of this.user.friendIDs) {
            let friend = this.datastore.getUserById(friendId);
            friends.push(friend);
        }

        return friends.sort((a,b) => a.name.localeCompare(b.name));
    }

    getFriendRequests(): User[] {
        let requests: User[] = [];
        for (let requestId of this.user.receivedRequests) {
            let friendRequest = this.datastore.getUserById(requestId);
            requests.push(friendRequest);
        }

        return requests.sort((a,b) => a.name.localeCompare(b.name));
    }
    
    removeFriend(id: string): void {
        let friend = this.friends.filter((item) => item.id == id)[0];
        if(friend != undefined && confirm('Are you sure you want to remove ' + friend.name + ' from your friends?')) {
            this.user.friendIDs = this.user.friendIDs.filter((item) => item !== id);
            this.friends = this.getFriends();
        }
    }

    addFriend(): void {
        let friend = this.friends.filter((item) => item.userName == this.newFriendUserName || item.email == this.newFriendUserName)[0];

        if(friend == undefined) {
            let user = this.datastore.getUserByUserName(this.newFriendUserName);
            if(user == undefined){
                user = this.datastore.getUserByEmail(this.newFriendUserName);
            }
            if(user != undefined && confirm('Are you sure you want to add ' + this.newFriendUserName + ' to your friends?')) {
                if(this.user.sentRequests == undefined){
                    this.user.sentRequests = [user.id];
                }
                else if(!this.user.sentRequests.some(item => item == user.id) &&
                        !this.user.receivedRequests.some(item => item == user.id)) {
                    this.user.sentRequests.push(user.id);
                }
                this.friends = this.getFriends();
                console.log(this.user.sentRequests);
            }
        }
    }

    approveRequest(id: string): void {
        this.user.receivedRequests = this.user.receivedRequests.filter(item => item != id);
        this.user.friendIDs.push(id);

        let request = this.datastore.getUserById(id);
        request.sentRequests = request.sentRequests.filter(item => item != id);
    }

    denyRequest(id: string): void {
        this.user.receivedRequests = this.user.receivedRequests.filter(item => item != id);

        let request = this.datastore.getUserById(id);
        request.sentRequests = request.sentRequests.filter(item => item != id);
    }
}
