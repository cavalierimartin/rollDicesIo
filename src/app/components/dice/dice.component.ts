import { Component, Input } from '@angular/core';
import { ColorsNameEnum } from 'src/app/models/colors-names.enum';
import { DicesService } from 'src/app/services/dices.service';


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})


export class DiceComponent {

  @Input() dices!: { colorName: string, id: string, selected: boolean, quantity: number, dicesValues: number[] }

  constructor(private dicesServices: DicesService) {

  }

  /**
   * Modifica el valor de un solo dado
   */
  rollDice(i: number) {
    //obtener el nuevo valor de dado y modificar el valor del dado
    this.dices.dicesValues[i] = this.dicesServices.getRandomNumber();











  }


  arrayOpciones(min: number, max: number) {
    let numeros = [];
    for (let i = min; i <= max; i++) {
      numeros.push(i);
    }
    return numeros;
  }



}




