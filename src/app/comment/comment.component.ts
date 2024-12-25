import { Component } from '@angular/core';
import { CommentService } from './services/comment.service';
import { Comments } from './comments';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  // comments$= this.commentService.getComments();

  constructor(private commentService:CommentService,private activatedRoute: ActivatedRoute){}

  // comments$! : Comments [];
  // getComments(){
  //   this.commentService.getComments$.subscribe(data => {
  //     this.comments$ = data;
  //   })
  // }

  comments! : Comments [];
  ngOnInit(){
    // this.getComments();
    this.activatedRoute.data.subscribe(data => {
      console.log("Comments    ",data);
      this.comments=data['comments'];
    })
  }
 

}
