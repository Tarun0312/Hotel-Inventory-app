import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room, RoomList } from '../rooms';
import { Subscription, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsserviceService {

  roomList : RoomList [] =[];

  headers = new HttpHeaders({'token':"12345acqwerttywee"})


  constructor(private http:HttpClient) {
   
   }

  //  property 
   getRooms$ = this.http.get<RoomList []>('/api/rooms ',{ headers : this.headers}).pipe(
    shareReplay(1)
   );

   getRooms(){
    return this.http.get<RoomList []>('/api/rooms');
   }

   addRooms(room : RoomList){
    return this.http.post<RoomList []>('/api/rooms',room);
   }
  
   editRoom(room:RoomList){
    // return this.http.put<RoomList []>(`/api/rooms/c296df8f-2a9b-4a99-85d4-1584ba230cab`,room)
    return this.http.put<RoomList []>(`/api/rooms/${room.roomNumber}`,room)
   }

   deleteRoom(roomNumber : string){

    return this.http.delete<RoomList []>(`/api/rooms/${roomNumber}`)
   }

   getPhotos(){
    const request = new HttpRequest('GET','https://jsonplaceholder.typicode.com/photos');
    return this.http.request(request);
   }
}
