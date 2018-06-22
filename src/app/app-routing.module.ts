import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddResourceModule } from './add-resource/add-resource.module';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';

const routes = [
  {
    path: 'resources', component: TabsComponent, children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':status', component: ListComponent }
    ]
  },
  {
    path: 'add-resource', loadChildren: './add-resource/add-resource.module#AddResourceModule'
  },
  {
    path: '**', redirectTo: '/resources/'
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
