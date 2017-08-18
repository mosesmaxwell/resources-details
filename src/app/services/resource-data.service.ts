import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class ResourceDataService {
  private candidates = [
    { empId: 109095, name: "Mahesh Kumar Murugan", status: '' },
    { empId: 126628, name: "Thanujha Malligeswaran", status: '' },
    { empId: 111613, name: "Basker Sundaramoorthy", status: '' },
    { empId: 111925, name: "Cheran Rajangam", status: '' },
    { empId: 126681, name: "Venkatesh Sha Sulugar Dhondu", status: '' },
    { empId: 120470, name: "Kishor Rajan Nagalingam Karuppiah", status: '' },
    { empId: 115288, name: "Eniya Umamaheshwari Kalaiarasan", status: '' },
    { empId: 126634, name: "Arvind Ravichandran", status: '' },
    { empId: 115352, name: "Vandana Nemaraj", status: '' },
    { empId: 115531, name: "Need Smith Arockia", status: '' },
    { empId: 115605, name: "Madhavan Masilamani", status: '' },
    { empId: 115661, name: "Arunachalam Muthaiah", status: '' },
    { empId: 116166, name: "Raja Thatchana Moorthy", status: '' },
    { empId: 116779, name: "Kannapiran R", status: '' },
    { empId: 116805, name: "Dhinesh Balasubramaniyan", status: '' },
    { empId: 103056, name: "Sundharesan Ramamurthy", status: '' },
    { empId: 117671, name: "Moses Maxwell Ephraiam Durai Raj", status: '' },
    { empId: 125177, name: "Saravanan P", status: '' },
    { empId: 105792, name: "Sundar N", status: '' },
    { empId: 106530, name: "Mohanbabu M", status: '' },
    { empId: 108819, name: "Sankaralingam R", status: '' },
    { empId: 109749, name: "Gabriella Linda Austin", status: '' },
    { empId: 112146, name: "Nandakumar Nagasundaram", status: '' },
    { empId: 115827, name: "Ramaswamy Krishnamoorthy", status: '' },
    { empId: 120504, name: "Veeramani Rengaraju", status: '' },
    { empId: 125370, name: "Vigneshwaran Pandurangan", status: '' },
    { empId: 126685, name: "Neethu N", status: '' }
  ];
  private logService: LogService;
  constructor(logService: LogService) {
    this.logService = logService;
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
      return resource.empId === candidateInfo.empId;
    });
    this.candidates[pos].status = candidateInfo.status;
    this.logService.writeLog('the selected status is '+ candidateInfo);
  }

  addNewResource(empId, name, status) {
    const pos = this.candidates.findIndex((resource) => {
      return resource.empId == empId || resource.name === name;
    });
    if (pos !== -1) {
      return 'Resource already exists!';
    }
    const newResource = { empId: empId, name: name, status: status };
    this.candidates.push(newResource);
    return 'Resource Added!';
  }
}
