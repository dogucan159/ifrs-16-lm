import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    DxDataGridModule,
    DxFormModule
  ],
  declarations: [HomePage, DashboardComponent]
})
export class HomePageModule {}
