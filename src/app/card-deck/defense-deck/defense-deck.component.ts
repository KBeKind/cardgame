import { Component, Input } from '@angular/core';
import { Card } from '../card-interface'; 

@Component({
  selector: 'app-defense-deck',
  templateUrl: './defense-deck.component.html',
  styleUrls: ['./defense-deck.component.css']
})
export class DefenseDeckComponent {
  @Input() card: any;

  defenseColors: string[] = ["rgb(78, 100, 122)", "rgb(174, 192, 212)"];
  defenseBg: string = `background: linear-gradient(132deg, ${this.defenseColors[0]} 0.00%, ${this.defenseColors[1]}  50.15%, ${this.defenseColors[0]}  100.00%)`;


  defenseDeck: Card[] = [
    {
      name: "Shield Block",
      actionType: "Defense",
      actionValue: "Shield",    
      imageSrc: "assets/images/card-images/shield.jpg",
      imageAlt: "Image of person holding a shield",
      background: this.defenseBg,
    },
    {
      name: "Ice Aura",
      actionType: "Defense",
      actionValue: "Ice",    
      imageSrc: "assets/images/card-images/ice-aura.jpg",
      imageAlt: "Image of a person with an ice aura",
      background: this.defenseBg,
    },
    {
      name: "Dodge",
      actionType: "Defense",
      actionValue: "Dodge",    
      imageSrc: "assets/images/card-images/dodge.jpg",
      imageAlt: "Image of a person dodging",
      background: this.defenseBg,
    },

  ]
}
