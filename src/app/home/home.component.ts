import { Component, OnInit, TemplateRef } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Screening } from '../model/screening';
import { SuggestedScreening } from '../model/suggestedScreening';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(public datastore: DatastoreService, private modalService: BsModalService) { }
    myDate = new Date();
    myYear = new Date().getFullYear();

    modalRef: BsModalRef;
    expiredScreenings: SuggestedScreening[];
    nextScreenings: SuggestedScreening[];
    modalScreening: Screening;
   
    openModal(screening: Screening, template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
      this.modalScreening = screening;
    }
    
    ngOnInit(): void {
      const now = new Date();
      this.expiredScreenings = this.datastore.user.suggestedScreenings.filter(item => item.date < now);
      this.nextScreenings = this.datastore.user.suggestedScreenings.filter(item => item.date >= now);
    }
}
