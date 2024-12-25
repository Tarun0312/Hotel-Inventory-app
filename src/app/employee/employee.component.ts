import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  constructor(private router:Router){
    
  }

  ngOnInit():void{
  
    this.router.events.pipe(
    filter(event => event instanceof NavigationStart)
    ).subscribe(event => {
      console.log("Navigation start");
      
    })

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      console.log("Navigation End");
      
    })
    
  }
}
