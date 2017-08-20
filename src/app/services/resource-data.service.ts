import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { LogService } from './log.service';
import 'rxjs/add/operator/map';

@Injectable()
export class ResourceDataService {
  private candidates = [
    { empId: '117671', name: 'Moses Maxwell Ephraiam Durai Raj', status: '' },
    { empId: '125177', name: 'Saravanan P', status: '' },
    { empId: '105792', name: 'Sundar N', status: '' },
    { empId: '106530', name: 'Mohanbabu M', status: '' },
    { empId: '108819', name: 'Sankaralingam R', status: '' },
    { empId: '109749', name: 'Gabriella Linda Austin', status: '' },
    { empId: '112146', name: 'Nandakumar Nagasundaram', status: '' },
    { empId: '115827', name: 'Ramaswamy Krishnamoorthy', status: '' },
    { empId: '120504', name: 'Veeramani Rengaraju', status: '' },
    { empId: '125370', name: 'Vigneshwaran Pandurangan', status: '' },
    { empId: '126685', name: 'Neethu N', status: '' }
  ];
  private logService: LogService;
  http: Http;
  resourceChanged = new Subject<void>();

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
   }

  fetchResources() {
    this.http.get('https://swapi.co/api/people/')
      .map((response: Response) => {
        const data = response.json();
        const extResources = data.results;
        const resources = extResources.map((resource) => {
          return { empId: resource.birth_year, name: resource.name, status: ''};
        });
        return resources;
      })
      .subscribe(
        (data) => {
          this.candidates = data;
          this.resourceChanged.next();
        }
      );
  }

  getResourceDetails(chosenList) {
    if (chosenList === 'all') {
      return this.candidates.slice();
    }
    return this.candidates.filter((resource) => {
      return resource.status === chosenList;
    });
  }

  setResourceStatus(candidateInfo) {
    const pos = this.candidates.findIndex((resource) => {
      return resource.name === candidateInfo.name;
    });
    this.candidates[pos].status = candidateInfo.status;
    this.resourceChanged.next();
    this.logService.writeLog('the selected status is ' + candidateInfo.name);
  }

  addNewResource(empId, name, status) {
    const pos = this.candidates.findIndex((resource) => {
      return resource.name === name;
    });
    if (pos !== -1) {
      return 'Resource already exists!';
    }
    const newResource = { empId: empId, name: name, status: status };
    this.candidates.push(newResource);
    return 'Resource Added!';
  }
}
