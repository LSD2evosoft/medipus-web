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
            name: 'Árvíztűrő Tükörfúró Béla',
            suggestedScreenings: [
                {
                    screening: {
                        id: "screening1",
                        name: "Prostate screening",
                        screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                    },
                }, {
                    screening: {
                        id: "screening2",
                        name: "Breast cancer screening",
                        screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                    }
                }
            ]
        } as any;
    }
}
