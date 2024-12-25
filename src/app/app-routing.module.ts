import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
// import { RoombookingComponent } from './rooms/roombooking/roombooking.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  // {
  //   path:"rooms",component:RoomsComponent,
  // },
  {
    path: "employee", component: EmployeeComponent, canActivate: [LoginGuard]
  },
  // {
  //   path: "", redirectTo: "rooms", pathMatch: 'full'
  // },
  //dynamic route
  // {
  //   path:'rooms/roombooking/:id',component:RoombookingComponent
  // },
  // {
  //   path:'rooms/add',component:RoomsAddComponent
  // },
  {
    path: "login", component: LoginComponent
  },
  {
    path:'',
    redirectTo : '/login',
     pathMatch : 'full'
  },
  //lazy loading
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then((m) => m.RoomsModule),
    canActivate: [LoginGuard],
    canLoad: [LoginGuard]
  },
  {
    path: 'booking/:id', 
    // component : BookingComponent
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    // canActivate: [LoginGuard]
  },
  { path: 'comments', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },

  //wildcard route
  {
    path: "**", component: NotfoundComponent
  },
  // 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
