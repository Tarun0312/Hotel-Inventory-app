import { Component, Input, OnDestroy } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient } from '@angular/common/http';
import { RoomsserviceService } from '../services/roomsservice.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent  {

  title : string = 'Taj Hotel'
  @Input() rooms : RoomList []  = [] ;

  @Input() price : number | null = 0;

  constructor(private roomService: RoomsserviceService){
 
  }


}
