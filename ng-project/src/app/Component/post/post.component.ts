import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../Service/post.service';
import {Post} from '../../Iterface/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() id: number;
  post: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPostByUserId(this.id).subscribe(value => this.post = value);
  }

}
