import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { ResourceDataService } from './services/resource-data.service';
import { LogService } from './services/log.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { AddResourceComponent } from './add-resource/add-resource.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    AddResourceComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule, AppRoutingModule, HttpModule
  ],
  providers: [ResourceDataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
