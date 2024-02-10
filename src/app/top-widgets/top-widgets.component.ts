import { Component } from '@angular/core';
import { 
  faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faContactBook,
  faHand,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss'
})
export class TopWidgetsComponent {
  faLocation = faLocation;
  faShop = faShop;
  faBox =faBox;
  faMoneyBill =faMoneyBill;
}
