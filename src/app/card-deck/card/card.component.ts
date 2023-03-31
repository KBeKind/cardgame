import { Component, Input } from '@angular/core';
import { CardDeckComponent } from '../card-deck.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card: any;



}
