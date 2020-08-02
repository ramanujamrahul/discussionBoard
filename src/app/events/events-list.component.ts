import { Component } from '@angular/core';
import { template } from '@angular/core/src/render3';

@Component({
    selector:'events-list',
    template:`
    <div>
    <h1>Upcoming anuglar stuff</h1>   
  <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
    `
   
})
export class EventsListComponent{
event1={
    id:1,
    name:'Angular Connect',
    date:'9/26/2036',
    time:'10:00 am',
    price:599.99,
    imageUrl:'/assests/images/angularconnect-shield.png',
    location:{
        address:'1057 DT',
        city:'London',
        country:'England'
    }
}
}