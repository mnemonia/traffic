import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrafficOverviewPageRoutingModule } from './traffic-overview-routing.module';

import { TrafficOverviewPage } from './traffic-overview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrafficOverviewPageRoutingModule
  ],
  declarations: [TrafficOverviewPage]
})
export class TrafficOverviewPageModule {}
