import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DatastoreService } from '../datastore.service';
import { Screening } from '../model/screening';

@Component({
    selector: 'app-screenings',
    templateUrl: './screenings.component.html',
    styleUrls: ['./screenings.component.scss']
})
export class ScreeningsComponent implements OnInit {

    selected = '';
    states: string[] = [];
    modalRef: BsModalRef;
    modalScreening: Screening;

    get screenings(): Screening[] {
        return this.datastore.screenings.filter(x => this.selected === '' || x.name.toLowerCase().indexOf(this.selected.toLowerCase()) >= 0);
    }

    constructor(
        public datastore: DatastoreService,
        public modalService: BsModalService
    ) { }

    ngOnInit(): void {
        this.states = this.datastore.screenings.map(x => x.name);
    }

    openModal(screening: Screening, template: TemplateRef<any>) {
        this.modalScreening = screening;
        this.modalRef = this.modalService.show(template);
    }
}
