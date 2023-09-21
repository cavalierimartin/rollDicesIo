import { Component } from '@angular/core';
import { Color } from '../../models/color.interface';
import { DicesService } from 'src/app/services/dices.service';

//

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

  dices: { colorName: string, id: string, selected: boolean, quantity: number, dicesValues: number[] }[] = [
    {
      colorName: this.colors['red'].name,
      id: this.colors['red'].id,
      selected: true,
      quantity: 3,
      dicesValues: []
    },
    {
      colorName: this.colors['blue'].name,
      id: this.colors['blue'].id,
      selected: true,
      quantity: 4,
      dicesValues: []
    },
    {
      colorName: this.colors['green'].name,
      id: this.colors['green'].id,
      selected: true,
      quantity: 5,
      dicesValues: []
    },
  ];

  public showResults = false;

  constructor(private dicesServices: DicesService) {

  }

  // obtener un listado de x numeros random por cada color
  rollDices() {
    this.dices.forEach((dice) => {
      if (dice.quantity > 0) {
        // tiro los dados y asigno los valores al color que se tiró esta vez
        dice.dicesValues = this.dicesServices.getRandomValues(dice.quantity);
      }
    });
    this.showResults = true;
  }


  numeroDelRango(dice: any) {
    dice.quantity = dice.selected;
  }

  cantidadDelRango(dice: any) {
    dice.selected = dice.quantity;
  }
}