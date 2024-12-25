import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-roombooking',
  templateUrl: './roombooking.component.html',
  styleUrls: ['./roombooking.component.scss']
})
export class RoombookingComponent {
  constructor(private router: ActivatedRoute) { }
  id!:string;

  // id$ !:Observable<string>;
  id$ =this.router.paramMap.pipe( map(params => params.get("id")));


  ngOnInit(): void {
    // this.router.params.subscribe(params => {
    //   console.log(params);
    // this.id = params['id']
    // })
    // this.id = this.router.snapshot.params['id'];
    // this.id$ = this.router.params.pipe(
    //   map(params => params['id'])
    // )
  }
}
