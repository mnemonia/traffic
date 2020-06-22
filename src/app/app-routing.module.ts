import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'traffic-overview',
    pathMatch: 'full'
  },
  {
    path: 'traffic-overview',
    loadChildren: () => import('./traffic-overview/traffic-overview.module').then( m => m.TrafficOverviewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
