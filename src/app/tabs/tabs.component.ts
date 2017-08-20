import { Component, OnInit } from '@angular/core';
import { ResourceDataService } from '../services/resource-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  rdService: ResourceDataService;

  constructor(rdService: ResourceDataService) {
    this.rdService = rdService;
  }

  ngOnInit() {
  }

  getResourcesCount(status) {
    return this.rdService.getResourceDetails(status).length;
  }
}
