import { Component } from '@angular/core';

@Component({
  selector: 'bus',
  template: '<p>Bus Component</p><router-outlet></router-outlet>'
})
export class BusComponent {
  title = 'routingTest';
}
