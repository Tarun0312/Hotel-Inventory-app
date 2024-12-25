import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanDeactivate<BookingComponent> {

  constructor(private snack:MatSnackBar){}

  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      if(component.bookingForm.pristine){
        return component.bookingForm.pristine;
      } else{

        this.snack.open('You have some unsaved changes','Discard')
        return false;
      } 
    
    //if user has entered something ,then only after saving that page user will exit that page,otherwise not
  }
  
}
