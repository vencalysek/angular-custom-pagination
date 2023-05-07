import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-custom-pagination';
  selectedPage = 1;

  getCurrentPage(event: number): void {
    if (this.selectedPage !== event) {
      this.selectedPage = event;
      console.log('this.selectedPage', this.selectedPage);
    }
  }
}
