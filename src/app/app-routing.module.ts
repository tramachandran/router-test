import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './flight.component';

const routes: Routes = [
  {
      path: "",
      redirectTo: "flights",
      pathMatch: 'full'
  },{
      path: "flights",
      component: FlightComponent
  },{
      path: "bus",
      loadChildren: () => import('./bus/bus.module').then(m => m.BusModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
