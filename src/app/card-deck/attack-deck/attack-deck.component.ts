import { Component, Input } from '@angular/core';
import { Card } from '../card-interface';

@Component({
  selector: 'app-attack-deck',
  templateUrl: './attack-deck.component.html',
  styleUrls: ['./attack-deck.component.css']
})
export class AttackDeckComponent {
  @Input() card: any;

  attackColors: string[] = ["rgb(179, 97, 43)", "rgb(214, 168, 144)"];


  attackBg: string = `background: linear-gradient(132deg, ${this.attackColors[0]} 0.00%, ${this.attackColors[1]} 50.15%, ${this.attackColors[0]} 100.00%)`



  attackDeck: Card[] = [
    {
      name: "Range Attack",
      actionType: "Attack",
      actionValue: "Range",    
      imageSrc: "assets/images/card-images/range.jpg",
      imageAlt: "Image of a bow and arrow",
      background: this.attackBg,

    },
    {
      name: "Fireball",
      actionType: "Attack",
      actionValue: "Fire",    
      imageSrc: "assets/images/card-images/fireball.jpg",
      imageAlt: "Image of a fireball",
      background: this.attackBg,

    },
    {
      name: "Melee Attack",
      actionType: "Attack",
      actionValue: "Melee",    
      imageSrc: "assets/images/card-images/melee.jpg",
      imageAlt: "Image of a sword",
      background: this.attackBg,
    },
  ]

}
