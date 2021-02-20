import { Component, OnInit, TemplateRef } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Screening } from '../model/screening';
import { SuggestedScreening } from '../model/suggestedScreening';
import { formatDistance } from 'date-fns';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(public datastore: DatastoreService, private modalService: BsModalService) { }

    helpers = {formatDistance}
    modalRef: BsModalRef;
    currentScreenings: SuggestedScreening[];
    nextScreenings: SuggestedScreening[];
    nextScreenings2: SuggestedScreening[];
    expiredScreenings: SuggestedScreening[];
    modalScreening: Screening;
    now: Date;
   
    openModal(screening: Screening, template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
      this.modalScreening = screening;
    }
    
    ngOnInit(): void {
      this.now = new Date();
      this.expiredScreenings = this.datastore.user.suggestedScreenings.filter(item => item.date < this.now) ?? null;
      this.nextScreenings2 = this.datastore.user.suggestedScreenings.filter(item => item.date >= this.now);
      this.currentScreenings = [this.datastore.user.suggestedScreenings[0]];
      this.nextScreenings = [this.datastore.user.suggestedScreenings[1]];
    }
}
