import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoombookingComponent } from './roombooking/roombooking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [  
    RoomsComponent,
    RoomsListComponent,
    RoomsAddComponent,
    RoombookingComponent,
    FilterPipe,

  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoomsModule { }
