import { Component, Input } from '@angular/core';
import { ColorsNameEnum } from 'src/app/models/colors-names.enum';
import { DiceStatusEnum } from 'src/app/models/dice-status.enum';
import { DiceGroup } from 'src/app/models/dice.interface';
import { DicesService } from 'src/app/services/dices.service';


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})


export class DiceComponent {

  @Input() diceGroup!: DiceGroup

  constructor(private dicesServices: DicesService) {

  }

  /**
   * Modifica el valor de un solo dado
   */
  rollDice(i: number) {
    //obtener el nuevo valor de dado y modificar el valor del dado
    if (this.diceGroup.dices && this.diceGroup.dices[i]) {
      this.diceGroup.dices[i].value = this.dicesServices.getRandomNumber();
      this.diceGroup.dices[i].status = DiceStatusEnum.RERROLLED;
    }
  }


  arrayOpciones(min: number, max: number) {
    let numeros = [];
    for (let i = min; i <= max; i++) {
      numeros.push(i);
    }
    return numeros;
  }



}




