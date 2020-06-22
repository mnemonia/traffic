import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrafficOverviewPage } from './traffic-overview.page';

const routes: Routes = [
  {
    path: '',
    component: TrafficOverviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrafficOverviewPageRoutingModule {}
