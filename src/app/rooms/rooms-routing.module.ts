import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoombookingComponent } from './roombooking/roombooking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomGuard } from './guards/room.guard';
import { LoginGuard } from '../guards/login.guard';

const routes: Routes = [
  {
    path: '', component: RoomsComponent,

    children:[
      {
        path:'add',component:RoomsAddComponent,
      },
      {
        path:'booking/:id',component:RoombookingComponent
      }
    ],
    canActivateChild : [RoomGuard],
  },
  // {
  //   path: 'rooms/add', component: RoomsAddComponent,
  // },
  // {
  //   path: 'rooms/roombooking/:id', component: RoombookingComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
