import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ResourceDataService } from '../services/resource-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  resources = [];
  activatedRoute: ActivatedRoute;
  rdService: ResourceDataService;
  loadedStatus = 'all';
  subscription;

  constructor(activatedRoute: ActivatedRoute, rdService: ResourceDataService) {
    this.activatedRoute = activatedRoute;
    this.rdService = rdService;
   }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params) => {
        this.resources = this.rdService.getResourceDetails(params.status);
        this.loadedStatus = params.status;
      }
    );
    this.subscription = this.rdService.resourceChanged.subscribe(
      () => {
      this.resources = this.rdService.getResourceDetails(this.loadedStatus);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
