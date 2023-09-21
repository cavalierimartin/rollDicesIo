import { Component } from '@angular/core';
import { Color } from '../../models/color.interface';
import { DicesService } from 'src/app/services/dices.service';
import { DiceGroup } from 'src/app/models/dice.interface';
import { ColorsNameEnum } from 'src/app/models/colors-names.enum';
import { ColorsIdsEnum } from 'src/app/models/colors-ids.enum';
import { DiceStatusEnum } from 'src/app/models/dice-status.enum';

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

  dicesGroups: DiceGroup[] = [
    {
      colorName: ColorsNameEnum.RED,
      id: ColorsIdsEnum.RED,
      quantity: 3
    },
    {
      colorName: ColorsNameEnum.BLUE,
      id: ColorsIdsEnum.BLUE,
      quantity: 4
    },
    {
      colorName: ColorsNameEnum.GREEN,
      id: ColorsIdsEnum.GREEN,
      quantity: 2
    },
  ];

  public showResults = false;

  constructor(private dicesServices: DicesService) {

  }

  // obtener un listado de x numeros random por cada color
  rollDices() {
    this.dicesGroups.forEach((dice) => {
      dice.dices = [];
      if (dice.quantity > 0) {
        // tiro los dados y asigno los valores al color que se tiró esta vez
        for (let i = 0; i < dice.quantity; i++) {
          dice.dices.push({ status: DiceStatusEnum.ROLLED, value: this.dicesServices.getRandomNumber() });
        }
      }
    });
    this.showResults = true;

    //obtengo el nombre de ngClass y lo pongo en verdadero para que cuando se aprete el boton 
  }

}