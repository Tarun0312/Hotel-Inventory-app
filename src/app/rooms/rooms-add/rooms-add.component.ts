import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsserviceService } from '../services/roomsservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {

  room : RoomList = {
    roomType: "",
    amenities: "",
    price: 0,
    photos: "",
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  };

  successMsg :string = " ";

  constructor(private roomService: RoomsserviceService){

  }

  addRoom(roomForm:NgForm){
    this.roomService.addRooms(this.room).subscribe( room => {
      console.log(room);
      this.successMsg = "Room Added Successfully "
      roomForm.resetForm({
        roomType: "",
        amenities: "",
        price: 0,
        photos: "",
        checkinTime: new Date(),
        checkoutTime: new Date(),
        rating: 0,
      })
    })
  }
}
