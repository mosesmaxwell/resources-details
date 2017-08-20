import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AddResourceComponent } from '../add-resource/add-resource.component';

@NgModule({
  declarations: [
    AddResourceComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([
      { path: '', component: AddResourceComponent }
    ])
  ]
})

export class AddResourceModule {}
