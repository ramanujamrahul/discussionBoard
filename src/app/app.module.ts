import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';

import {
  EventThumbnailComponent,
  EventListResolver,
  EventRouteActivator,
  EventDetailsComponent,
  EventService,
  EventsListComponent
} from './events/index'
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
  {
    provide:'canDeactivateCreateEvent',
    useValue:checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isdirty)
  return window.confirm('you have not saved the event,do you really want to go back')
  return true;
}
