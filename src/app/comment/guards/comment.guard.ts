import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Comments } from '../comments';
import { CommentService } from '../services/comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<Comments []> {

  constructor(private commentService:CommentService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Comments[] | Observable<Comments[]> | Promise<Comments[]> {
    return this.commentService.getComments$;
  }
  
}
