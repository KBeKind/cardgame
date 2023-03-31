import { Component } from '@angular/core';
import { Card } from './card-interface';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.css']
})

export class CardDeckComponent {

  attackColors: string[] = ["rgb(179, 97, 43)", "rgb(214, 168, 144)"];
  defenseColors: string[] = ["rgb(78, 100, 122)", "rgb(174, 192, 212)"];

  attackBg: string = `background: linear-gradient(132deg, ${this.attackColors[0]} 0.00%, ${this.attackColors[1]} 50.15%, ${this.attackColors[0]} 100.00%)`
  defenseBg: string = `background: linear-gradient(132deg, ${this.defenseColors[0]} 0.00%, ${this.defenseColors[1]}  50.15%, ${this.defenseColors[0]}  100.00%)`;


  //Listed in order of the card action wins
  cardDeck: Card[] = [
    {
      name: "Fast Strike",
      actionType: "Attack",
      actionValue: "Fast",    
      imageSrc: "assets/images/card-images/ice-aura.jpg",
      imageAlt: "Image of Ice Aura",
      background: this.attackBg,

    },
    {
      name: "Fireball",
      actionType: "Attack",
      actionValue: "Fire",    
      imageSrc: "assets/images/card-images/fireball.jpg",
      imageAlt: "Image of Ice Aura",
      background: this.attackBg,

    },
    {
      name: "Strong Attack",
      actionType: "Attack",
      actionValue: "Strong",    
      imageSrc: "assets/images/card-images/ice-aura.jpg",
      imageAlt: "Image of Ice Aura",
      background: this.attackBg,
    },
    {
      name: "Shield Block",
      actionType: "Defense",
      actionValue: "Shield",    
      imageSrc: "assets/images/card-images/shield.jpg",
      imageAlt: "Image of Ice Aura",
      background: this.defenseBg,
    },
    {
      name: "Ice Aura",
      actionType: "Defense",
      actionValue: "Ice",    
      imageSrc: "assets/images/card-images/ice-aura.jpg",
      imageAlt: "Image of Ice Aura",
      background: this.defenseBg,
    },
    {
      name: "Dodge",
      actionType: "Defense",
      actionValue: "Dodge",    
      imageSrc: "assets/images/card-images/ice-aura.jpg",
      imageAlt: "Image of Ice Aura",
      background: this.defenseBg,
    },

  ]

}


