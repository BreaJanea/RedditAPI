import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../interfaces/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() myPost:Post;
  constructor() { }

  ngOnInit(): void {
  }

}