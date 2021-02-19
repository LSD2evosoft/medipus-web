import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
    providedIn: 'root'
})
export class DatastoreService {

    user: User;
    users: User[];

    constructor() {

        this.users = [
            {
                id: 'asd213bde',
                name: 'Árvíztűrő Tükörfúró Béla',
                healthScore: 4,
                friendIDs: ['friendid1', 'friendid2'],
                suggestedScreenings: [
                    {
                        screening: {
                            id: "screening1",
                            name: "Prostate screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   ",
                        },
                    }, {
                        screening: {
                            id: "screening2",
                            name: "Breast cancer screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                        }
                    }
                ]
            } as any,
            {
                id: 'asd345bde',
                name: 'Árvíztűrő Tükörfúró Géza',
                healthScore: 20,
                suggestedScreenings: [
                    {
                        screening: {
                            id: "screening3",
                            name: "Lung screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                        },
                    }, {
                        screening: {
                            id: "screening4",
                            name: "Diabetes screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                        }
                    }
                ]
            } as any,
            {
                id: 'asd567bde',
                name: 'Árvíztűrő Tükörfúró Jani',
                healthScore: 5,
                suggestedScreenings: [
                    {
                        screening: {
                            id: "screening1",
                            name: "Prostate screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                        },
                    }, {
                        screening: {
                            id: "screening3",
                            name: "Diabetes screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                        }
                    }
                ]
            } as any,
            {
                id: 'friendid1',
                name: 'Joshi Bharat',
                healthScore: 1,
            } as any,
            {
                id: 'friendid2',
                name: 'Józsi Bharat',
                healthScore: 2,
            } as any
        ];

        this.user = this.users[0];
    }
}
