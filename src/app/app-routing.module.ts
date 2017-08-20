import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddResourceComponent } from './add-resource/add-resource.component';

const routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'add-resource', component: AddResourceComponent
  },
  {
    path: '**', redirectTo: '/'
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
