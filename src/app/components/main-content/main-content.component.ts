import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
faUserPlus = faUserPlus;
}
