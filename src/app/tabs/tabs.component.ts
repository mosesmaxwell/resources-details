import { Component, OnInit } from '@angular/core';
import { ResourceDataService } from '../services/resource-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  resources = [];
  chosenList = 'all';
  rdService: ResourceDataService;

  constructor(rdService: ResourceDataService) {
    this.rdService = rdService;
  }

  ngOnInit() {
  }

  setChoose(status) {
    this.chosenList = status;
  }

  getResources() {
    this.resources = this.rdService.getResourceDetails(this.chosenList);
    return this.resources;
  }

  getResourcesCount(status) {
    return this.rdService.getResourceDetails(status).length;
  }
}
