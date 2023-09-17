import { Component } from '@angular/core';
import { Color } from '../../models/color.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  colors: { [key: string]: Color } = {
    red: {
      name: 'Rojo',
      id: 'red',
    },
    blue: {
      name: 'Azul',
      id: 'blue',
    },
    green: {
      name: 'Verde',
      id: 'green',
    },
  };

  dices: any = [
    {
      name: this.colors['red'].name,
      id: this.colors['red'].id,
      selected: true,
      quantity: 3,
    },
    {
      name: this.colors['blue'].name,
      id: this.colors['blue'].id,
      selected: true,
      quantity: 4,
    },
    {
      name: this.colors['green'].name,
      id: this.colors['green'].id,
      selected: true,
      quantity: 5,
    },
  ];

  showResults: boolean = false;
  dicesResults: { colorName: any; dicesValues: number[] }[] = [];

  rollDices() {
    this.showResults = false;
    this.dicesResults = [];
    this.dices.map((dice: any) => {
      if (dice.selected) {
        let results: number[] = [];
        for (let i = 0; i < dice.quantity; i++) {
          results.push(Math.floor(Math.random() * 8) + 1);
        }
        this.dicesResults.push({
          colorName: dice.name,
          dicesValues: results,
        });
      }
    });

    this.showResults = true;
  }
}
