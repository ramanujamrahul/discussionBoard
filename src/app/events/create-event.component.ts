import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
    template:`
    <h1>New event</h1>
    <hr>
    <div class="col-md-6">
    <h3>[Create Event Form will go here]</h3>
    <br/>
    <br/>
    <button type="submit" class="btn btn-primary"> Save</button>
    <button type="button" (click)="cancel()" class="btn btn-default">Cancel</button>
    </div>
    `
})
export class CreateEventComponent{
    isdirty:boolean=true
    constructor(private router:Router){
        
    }
cancel(){
this.router.navigate(['/events']);
}
}