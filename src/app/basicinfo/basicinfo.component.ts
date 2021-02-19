import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { Sex } from '../model/sex';

@Component({
    selector: 'app-basicinfo',
    templateUrl: './basicinfo.component.html',
    styleUrls: ['./basicinfo.component.scss']
})
export class BasicInfoComponent implements OnInit {

    birthDate = new Date(2000, 0, 1);
    sex: string;
    weight: string;
    height: string;

    constructor(private datastore: DatastoreService) { }

    ngOnInit(): void {
        const user = this.datastore.user;
        this.birthDate = user.dateOfBirth;
        this.sex = user.sex?.toString() ?? 'Female';
        this.weight = user.weight?.toString() ?? '65.0';
        this.height = user.height?.toString() ?? '170.0';
    }

    save() {
        let sex = Sex.Other;
        const sexInput = this.sex.toLowerCase();
        if (sexInput === 'male') { sex = Sex.Male; }
        else if (sexInput === 'female') { sex = Sex.Female; }

        const weight = parseFloat(this.weight);
        const height = parseFloat(this.height);

        this.datastore.user = {
            ...this.datastore.user,
            dateOfBirth: this.birthDate,
            sex,
            weight,
            height
        };
    }
}
