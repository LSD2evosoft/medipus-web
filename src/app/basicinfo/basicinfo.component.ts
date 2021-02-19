import { Component, OnInit } from '@angular/core';
import { Sex } from '../model/sex';

@Component({
    selector: 'app-basicinfo',
    templateUrl: './basicinfo.component.html',
    styleUrls: ['./basicinfo.component.scss']
})
export class BasicInfoComponent implements OnInit {

    birthDate: any;
    sex: Sex;
    weight: number;
    height: number;

    constructor() { }

    ngOnInit(): void {
    }

}
