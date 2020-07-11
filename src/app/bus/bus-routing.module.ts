import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusComponent } from './bus.component';
import { BusTicketComponent } from './bus-ticket.component';


const routes: Routes = [
  {
      path : '',
      component: BusComponent,
      children: [
                {
                    path: "tickets",
                    component: BusTicketComponent
                }
      ]
          
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRoutingModule { }
