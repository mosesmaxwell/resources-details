import { Component, OnInit, Input } from '@angular/core';
import { ResourceDataService } from '../services/resource-data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() resource;
  rdService: ResourceDataService;

  constructor(rdService: ResourceDataService) {
    this.rdService = rdService;
  }

  ngOnInit() {
  }

  onAssign(status) {
    this.rdService.setResourceStatus({ name: this.resource.name, status: status });
  }

}
