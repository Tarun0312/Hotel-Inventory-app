import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoomList } from './rooms';
import { RoomsserviceService } from './services/roomsservice.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit,OnDestroy {

  roomList : RoomList [] = [];

  subscription! : Subscription;

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable()

  errorMessage =''

  //without subscribe ,use async to get the data
  // rooms$=this.roomService.getRooms$.pipe(
  //   catchError( err => {
  //     // console.log(err.message);
  //     // this.errorMessage=err.message
  //     this.error$.next(err.message)
  //     return of([]);
  //   })
  // );
  
  countRooms$  = this.roomService.getRooms$.pipe(
    map((rooms) => rooms.length)
  );

  constructor(private roomService : RoomsserviceService){

  }


  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');  
    observer.next('user3');
    observer.complete();
    // observer.error('error');
  })

  loadedBytes : number = 0

  ngOnInit(): void {
    this.roomService.getRooms$.subscribe( rooms => this.roomList = rooms);
    

    // httpRequest
    this.subscription = this.roomService.getPhotos().subscribe( event => {
      
      switch (event.type){
        case HttpEventType.Sent : {
          console.log("Request has been made");
          break;
        }
        case HttpEventType.ResponseHeader : {
          console.log("Request Success");
          break;
        }
        case HttpEventType.DownloadProgress:{
          this.loadedBytes = event.loaded;
          break;
        }
        case HttpEventType.Response : {
          console.log(event.body);
          console.log(event);
          
          break;
        }
      }
    })
  }

  addRoom(){
    const room =  {
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 2.9,
    }
    this.roomService.addRooms(room).subscribe(room => { this.roomList = room})
    // this.roomList.push(room);
  }
  editRoom(){
    const room =  {
      roomNumber: '2',
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 3.9,
    }

    this.roomService.editRoom(room).subscribe( data => {
      this.roomList = data
    })
  }

  deleteRoom(){
    this.roomService.deleteRoom('3').subscribe(data => {
      this.roomList = data;
    })
  }

 
  priceFilter = new FormControl<number| null>(0)



  ngOnDestroy(): void {
    if(this.subscription){
      console.log("Before unsubscribe",this.subscription);
      
      this.subscription.unsubscribe();
      console.log("After unsubscribe",this.subscription);
      
    }
  }
}
