import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit-service';
import { Posts } from '../interfaces/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:Posts;
  constructor(private rService:RedditService) { }

  ngOnInit(): void {
    this.rService.getPosts().subscribe(
      (data: Posts) => this.posts = { ...data }, 
      error => console.error(error)
    );
  }
}