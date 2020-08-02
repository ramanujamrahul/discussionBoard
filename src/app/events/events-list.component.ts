import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector:'events-list',
    template:`
    <div>
    <h1>Upcoming anuglar stuff</h1>  
    <div class="row">
<div *ngFor="let event of events" class="col-md-5" >
  <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
  </div>
  </div>
    `
   
})
export class EventsListComponent implements OnInit{
    events:any[]
   constructor(private eventService:EventService,private toastr:ToastrService){

   }
   ngOnInit(){
    this.events=this.eventService.getEvents(); 
   }
   handleThumbnailClick(eventName){
       this.toastr.success(eventName)
   }  
}



