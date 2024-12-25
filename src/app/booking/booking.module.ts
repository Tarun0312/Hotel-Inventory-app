import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingComponent } from './booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {  HttpClientModule } from '@angular/common/http';
import { BookingRoutingModule } from './booking-routing.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    BookingRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatIconModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSnackBarModule
  ]
})

export class BookingModule { }
