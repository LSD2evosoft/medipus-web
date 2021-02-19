import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
    providedIn: 'root'
})
export class DatastoreService {

    user: User;
    users: User[];
    toplist: User[];

    constructor() {

        this.users = [
            {
                id: 'asd213bde',
                name: 'Árvíztűrő Tükörfúró Béla',
                healthScore: 10,
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
            } as any,{
                id: 'asd567bde',
                name: 'Árvíztűrő Tükörfúró Jani',
                healthScore: 1,
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
            } as any
        ];

        this.user = this.users[0];
        this.toplist = this.users.sort((a,b) => b.healthScore - a.healthScore);
    }
}
