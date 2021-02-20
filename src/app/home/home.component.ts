import { Component, OnInit, TemplateRef } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Screening } from '../model/screening';
import { SuggestedScreening } from '../model/suggestedScreening';
import { formatDistance } from 'date-fns'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(public datastore: DatastoreService, private modalService: BsModalService) { }
    myDate = new Date();

    helpers = {formatDistance}
    modalRef: BsModalRef;
    currentScreenings: SuggestedScreening[];
    nextScreenings: SuggestedScreening[];
    modalScreening: Screening;
    now: Date;
   
    openModal(screening: Screening, template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
      this.modalScreening = screening;
    }
    
    ngOnInit(): void {
      this.now = new Date();
      this.currentScreenings = [this.datastore.user.suggestedScreenings[0]];
      this.nextScreenings = [this.datastore.user.suggestedScreenings[1]];
    }
}
