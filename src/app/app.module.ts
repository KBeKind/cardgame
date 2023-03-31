import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerAreaComponent } from './player-area/player-area.component';
import { OpponentAreaComponent } from './opponent-area/opponent-area.component';
import { BoardAreaComponent } from './board-area/board-area.component';
import { PlayerHandComponent } from './player-area/player-hand/player-hand.component';
import { OpponentHandComponent } from './opponent-area/opponent-hand/opponent-hand.component';
import { PlayerPlayedCardsComponent } from './board-area/player-played-cards/player-played-cards.component';
import { OpponentPlayedCardsComponent } from './board-area/opponent-played-cards/opponent-played-cards.component';
import { ActionAreaComponent } from './board-area/action-area/action-area.component';
import { OpponentCurrentCardComponent } from './board-area/current-card-sidebar/opponent-current-card/opponent-current-card.component';
import { PlayerCurrentCardComponent } from './board-area/current-card-sidebar/player-current-card/player-current-card.component';
import { CurrentCardSidebarComponent } from './board-area/current-card-sidebar/current-card-sidebar.component';
import { CardDeckComponent } from './card-deck/card-deck.component';
import { CardComponent } from './card-deck/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerAreaComponent,
    OpponentAreaComponent,
    BoardAreaComponent,
    PlayerHandComponent,
    OpponentHandComponent,
    PlayerPlayedCardsComponent,
    OpponentPlayedCardsComponent,
    ActionAreaComponent,
    OpponentCurrentCardComponent,
    PlayerCurrentCardComponent,
    CurrentCardSidebarComponent,
    CardDeckComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
