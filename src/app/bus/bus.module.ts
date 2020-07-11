import { NgModule } from '@angular/core';

import { BusRoutingModule } from './bus-routing.module';
import { BusComponent } from './bus.component';
import { BusTicketComponent } from './bus-ticket.component';

@NgModule({
  declarations: [
    BusComponent,
    BusTicketComponent
  ],
  imports: [
    BusRoutingModule
  ],
  providers: [],
  bootstrap: [BusComponent]
})
export class BusModule { }
