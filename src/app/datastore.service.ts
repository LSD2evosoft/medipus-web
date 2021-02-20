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

        this.screenings = [{
            id: "screening1",
            name: "Prostate screening",
            screeningInfo: "Screening for prostate cancer is done to find evidence of cancer in otherwise healthy adults. Two tests are commonly used to screen for prostate cancer: Digital rectal examination (DRE). A DRE is a test in which the doctor inserts a gloved, lubricated finger into the rectum and feels the surface of the prostate through the bowel wall for any irregularities. PSA blood test. There is controversy about using the PSA test to look for prostate cancer in people with no symptoms of the disease. On the one hand, the PSA test is useful for detecting early-stage prostate cancer."
        }, {
            id: "screening2",
            name: "Breast cancer screening",
            screeningInfo: "You will stand in front of a special X-ray machine. A technologist will place your breast on a plastic plate. Another plate will firmly press your breast from above. The plates will flatten the breast, holding it still while the X-ray is being taken. You will feel some pressure. The steps are repeated to make a side view of the breast. The other breast will be X-rayed in the same way. You will then wait while the technologist checks the four X-rays to make sure the pictures do not need to be re-done."
        }, {
            id: "screening3",
            name: "Lung screening",
            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
        }, {
            id: "screening4",
            name: "Diabetes screening",
            screeningInfo: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati vero ex voluptatibus dicta dolore ullam deleniti eos temporibus, hic non.   "
        }, {
            id: "screening5",
            name: "Cholesterol check",
            screeningInfo: "High cholesterol does not cause symptoms. You can only find out if you have it from a blood test. Your GP might suggest having a test if they think your cholesterol level could be high. This may because of your age, weight or another condition you have (like high blood pressure or diabetes). There are 2 ways of having a cholesterol test: Taking blood from your arm or Finger-prick test."
        }];

        this.users = [
            {
                id: '2d9f166b-276c-4f34-8c35-8632439e83ee',
                name: 'Árvíztűrő Tükörfúró Béla',
                userName: 'bela',
                email: 'bela@tukorfuro.hu',
                healthScore: 4,
                friendIDs: ['e041da87-6d66-4deb-b6cd-d2473cc86a06', 'c75c36f7-8c5c-4095-b1ed-292b2f16a225'],
                receivedRequests: ['7aa37440-6b02-425f-be1c-b56f661aaacc'],
                suggestedScreenings: [
                    {
                        id: '72f68663-9558-4d18-a395-c9c137f983a0',
                        screening: this.screenings[1],
                        date: new Date('2021-03')
                    }, {
                        id: 'fefe0587-4eb1-4454-827f-bee2fd055649',
                        screening: this.screenings[4],
                        date: new Date('2021-07')
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
                        screening: this.screenings[2],
                    }, {
                        id: '6cfbde6f-15a0-4c49-bc90-d06987ed43ea',
                        screening: this.screenings[3]
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
                        screening: this.screenings[0],
                    }, {
                        id: "97b4c749-4ddf-42dc-be23-9d52e5a70c3e",
                        screening: this.screenings[2],
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
            }, {
                id: '7aa37440-6b02-425f-be1c-b56f661aaacc',
                name: 'Pista Bharat',
                userName: "pista",
                email: 'pista@tukorfuro.hu',
                healthScore: 3,
                sentRequests: ['2d9f166b-276c-4f34-8c35-8632439e83ee']
            }
        ];

        this.user = this.users[0];
    }

    getUserById(id: string) {
        return this.users.filter(item => item.id === id)[0];
    }

    getUserByUserName(userName: string) {
        return this.users.filter(item => item.userName === userName)[0];
    }

    getUserByEmail(email: string) {
        return this.users.filter(item => item.email === email)[0];
    }

    flatMap<TIn, TOut>(arr: TIn[], selector: ((a: TIn) => TOut[])): TOut[] {
        return arr.reduce((acc, x) => acc.concat(selector(x)), []);
    }
}
