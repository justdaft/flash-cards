import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';
import * as _ from 'lodash';
import {DeckService} from '../shared/deck.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [DeckService],
  animations: [
    trigger('visibilityChanged', [
      state('true', style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
      transition('1 => 0, 0 => 1', animate('300ms'))
    ])
  ],
})
export class CardComponent implements OnInit {
  isVisible: boolean = true;
  letterArray: Array<any> = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  currentLetter: string;
  currentArray = _.shuffle(this.letterArray);
  currentScore: number = 0;
  turns: number = 0;

  // deck = {
  //   letters: this.letterArray,
  //   createCardPicker: function () {
  //     return () => {
  //       let pickedLetter = Math.floor(Math.random() * 52);
  //       return { letter: this.letters[pickedLetter] };
  //     };
  //   }
  // };

  constructor(public deckService: DeckService ) {
    deckService.conLog();
  }

  animationDone() {
    console.log('done');
  }

  pickCard() {
    // console.log(this.currentArray);
    // this.isVisible = !this.isVisible;
    // let cardPicker = this.deck.createCardPicker();
    // let pickedCard = cardPicker();

    this.currentLetter = this.currentArray[this.turns];
        // this.currentLetter = pickedCard.letter;
    this.turns++;
     this.deckService.conLog();
    // this.isVisible = !this.isVisible;

  }

  goBack() {
        this.currentLetter = this.currentArray[this.turns - 1];
        // this.currentLetter = pickedCard.letter;
    // this.turns++;
  }

  ngOnInit() {
    this.pickCard();
    console.log(this.currentArray);
  }

}
