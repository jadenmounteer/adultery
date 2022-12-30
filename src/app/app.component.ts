import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tubular';

  constructor(private http: HttpClient) {
    // const testData = {
    //   title: 'test',
    //   content: 'hello world',
    // };
    // this.onCreatePost(testData);
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http
      .post(
        'https://tubular-cccbd-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
}
