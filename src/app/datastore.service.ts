import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
    providedIn: 'root'
})
export class DatastoreService {

    user: User;

    constructor() {

        this.user = {
            id: 'asd213bde',
            name: 'Árvíztűrő Tükörfúró Béla'
        };
    }
}
