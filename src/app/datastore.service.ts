import { Injectable } from '@angular/core';
import { Screening } from './model/screening';
import { User } from './model/user';

@Injectable({
    providedIn: 'root'
})
export class DatastoreService {

    user: User;
    users: User[];
    toplist: User[];
    screenings: Screening[];

    constructor() {

        this.users = [
            {
                id: '2d9f166b-276c-4f34-8c35-8632439e83ee',
                name: 'Árvíztűrő Tükörfúró Béla',
                userName: 'bela',
                email: 'bela@tukorfuro.hu',
                healthScore: 4,
                friendIDs: ['e041da87-6d66-4deb-b6cd-d2473cc86a06', 'c75c36f7-8c5c-4095-b1ed-292b2f16a225'],
                suggestedScreenings: [
                    {
                        id: '72f68663-9558-4d18-a395-c9c137f983a0',
                        screening: {
                            id: "screening1",
                            name: "Prostate screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   ",
                        },
                    }, {
                        id: 'fefe0587-4eb1-4454-827f-bee2fd055649',
                        screening: {
                            id: "screening2",
                            name: "Breast cancer screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                        }
                    }
                ]
            }, {
                id: '9a7b7831-896f-456e-9c1e-31d5be8190c5',
                name: 'Árvíztűrő Tükörfúró Géza',
                userName: 'geza',
                email: 'geza@tukorfuro.hu',
                healthScore: 20,
                suggestedScreenings: [
                    {
                        id: '52fc319b-3659-44b7-ae7e-44f786432b6b',
                        screening: {
                            id: "screening3",
                            name: "Lung screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                        },
                    }, {
                        id: '6cfbde6f-15a0-4c49-bc90-d06987ed43ea',
                        screening: {
                            id: "screening4",
                            name: "Diabetes screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                        }
                    }
                ]
            }, {
                id: '03e5e719-0142-4a6c-9957-b0b67bf806ac',
                name: 'Árvíztűrő Tükörfúró Jani',
                userName: 'jani',
                email: 'jani@tukorfuro.hu',
                healthScore: 5,
                suggestedScreenings: [
                    {
                        id: "c66f14f5-ed48-41b7-8b92-660cf579747d",
                        screening: {
                            id: "screening1",
                            name: "Prostate screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                        },
                    }, {
                        id: "97b4c749-4ddf-42dc-be23-9d52e5a70c3e",
                        screening: {
                            id: "screening3",
                            name: "Diabetes screening",
                            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
                        }
                    }
                ]
            }, {
                id: 'e041da87-6d66-4deb-b6cd-d2473cc86a06',
                name: 'Joshi Bharat',
                userName: "joshi",
                email: 'joshi@tukorfuro.hu',
                healthScore: 1,
            }, {
                id: 'c75c36f7-8c5c-4095-b1ed-292b2f16a225',
                name: 'Józsi Bharat',
                userName: "jozsi",
                email: 'jozsi@tukorfuro.hu',
                healthScore: 2,
            } as any
        ];

        this.user = this.users[0];
    }
}
