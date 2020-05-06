import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
