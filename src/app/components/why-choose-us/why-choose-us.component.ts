import { Component } from '@angular/core';
import {
  faGamepad,
  faUserShield,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
})
export class WhyChooseUsComponent {
  faGamepad = faGamepad;
  faUserShield = faUserShield;
  faChartLine = faChartLine;
}
