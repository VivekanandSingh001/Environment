import { Component } from '@angular/core';
import { environment } from '../environments/environments.qa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'env';
  hostUrl=environment.hostUrl;
  hii(){
    window.alert("hiii,There")
  }
}
