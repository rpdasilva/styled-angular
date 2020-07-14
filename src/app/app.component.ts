import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'styled-angular';
  count = 0;
  bgToggle = false;
  currentBg = 'hotpink';

  onClick() {
    this.count++;
  }

  changeBg() {
    this.bgToggle = !this.bgToggle;
    this.currentBg = this.bgToggle ? 'lightgreen' : 'hotpink';
  }
}
