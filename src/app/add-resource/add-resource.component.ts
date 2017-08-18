import { Component, OnInit } from '@angular/core';
import { ResourceDataService } from '../services/resource-data.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {
  srcService: ResourceDataService;
  message = '';
  srcStatus = [
    {
      display: 'Billable', value: 'billable'
    },
    {
      display: 'Bench', value: 'bench'
    },
    {
      display: 'Blocked', value: 'blocked'
    }
  ];

  constructor(srcService: ResourceDataService) {
    this.srcService = srcService;
  }

  ngOnInit() {
  }

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    console.log('submitted!', form.value);
    this.message = this.srcService.addNewResource(form.value.id, form.value.name, form.value.status);
  }

}
