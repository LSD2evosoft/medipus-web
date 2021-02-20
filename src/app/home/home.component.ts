import { Component, OnInit, TemplateRef } from '@angular/core';
import { DatastoreService } from '../datastore.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(public datastore: DatastoreService, private modalService: BsModalService) { }

    modalRef: BsModalRef;
   
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
    
    ngOnInit(): void {
    }
}
