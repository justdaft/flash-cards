import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('true', style({ opacity: 1, transform: 'scale(1.0)' })),
      state('false', style({ opacity: 0, transform: 'scale(0.0)' })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])
  ],
})
export class CardComponent implements OnInit {
  isVisible: boolean = false;
  letterArray: Array<any> = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY'.split('');
  currentLetter: string;

  deck = {
    letters: this.letterArray,
    cards: Array(52),
    createCardPicker: function () {
      return () => {
        let pickedLetter = Math.floor(Math.random() * 52);
        return { letter: this.letters[pickedLetter] };
      };
    }
  };

  constructor() {
  }


  pickCard() {
    this.isVisible = !this.isVisible;
    let cardPicker = this.deck.createCardPicker();
    let pickedCard = cardPicker();
    this.currentLetter = pickedCard.letter;
  }


  ngOnInit() {
    this.pickCard();
  }

}
