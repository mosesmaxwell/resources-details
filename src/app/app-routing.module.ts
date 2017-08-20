import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { AddResourceComponent } from './add-resource/add-resource.component';

const routes = [
  {
    path: '', component: TabsComponent
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
