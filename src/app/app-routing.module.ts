import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidemenuComponent } from './components/admin-dashboard/sidemenu/sidemenu.component';


const routes: Routes = [
  {path: "admin", loadChildren: () => import('./components/admin/admin.module')
   .then(mod => mod.AdminModule)},
   {path: "sidemenu", loadChildren: () => import('./components/admin-dashboard/admin-dashboard.module')
   .then(mod => mod.AdminDashboardModule)},
   {path: "sidemenu" , component: SidemenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
